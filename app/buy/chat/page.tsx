"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Message = {
  id: string;
  sender: "buyer" | "seller";
  text: string;
  time: string;
};

type ChatConversation = {
  id: string;
  sellerId: string;
  sellerName: string;
  listingId: string;
  listingName: string;
  messages: Message[];
};

export default function ChatPage() {
  const searchParams = useSearchParams();

  const sellerId = searchParams.get("sellerId") || "";
  const sellerName =
    searchParams.get("sellerName") || "Seller";
  const listingId =
    searchParams.get("listingId") || "";
  const listingName =
    searchParams.get("listingName") || "Listing";

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const conversationId =
    `${sellerId}-${listingId}`;

  useEffect(() => {
    const savedChats =
      localStorage.getItem("chatConversations");

    if (savedChats) {
      try {
        const conversations: ChatConversation[] =
          JSON.parse(savedChats);

        const conversation =
          conversations.find(
            (chat) =>
              chat.id === conversationId
          );

        if (conversation) {
          setMessages(conversation.messages);
        }
      } catch {
        setMessages([]);
      }
    }
  }, [conversationId]);

  const sendMessage = () => {
    const trimmedMessage =
      message.trim();

    if (!trimmedMessage) {
      return;
    }

    const newMessage: Message = {
      id:
        Date.now().toString() +
        Math.random()
          .toString(36)
          .substring(2, 8),
      sender: "buyer",
      text: trimmedMessage,
      time: new Date().toLocaleString(),
    };

    const updatedMessages = [
      ...messages,
      newMessage,
    ];

    setMessages(updatedMessages);
    setMessage("");

    const savedChats =
      localStorage.getItem(
        "chatConversations"
      );

    let conversations: ChatConversation[] =
      [];

    if (savedChats) {
      try {
        conversations =
          JSON.parse(savedChats);
      } catch {
        conversations = [];
      }
    }

    const existingIndex =
      conversations.findIndex(
        (chat) =>
          chat.id === conversationId
      );

    const updatedConversation:
      ChatConversation = {
        id: conversationId,
        sellerId,
        sellerName,
        listingId,
        listingName,
        messages: updatedMessages,
      };

    if (existingIndex >= 0) {
      conversations[existingIndex] =
        updatedConversation;
    } else {
      conversations.push(
        updatedConversation
      );
    }

    localStorage.setItem(
      "chatConversations",
      JSON.stringify(conversations)
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-3xl">

        <div className="mb-5">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            Chat with Seller
          </h1>

        </div>

        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">

          <div className="border-b border-gray-200 px-5 py-4">

            <p className="text-sm text-gray-500">
              Seller
            </p>

            <p className="font-bold text-gray-900">
              {sellerName}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              About
            </p>

            <p className="font-semibold text-gray-900">
              {listingName}
            </p>

            {sellerId && (
              <p className="text-xs text-gray-500 font-mono mt-2">
                Seller ID: {sellerId}
              </p>
            )}

          </div>

          <div className="min-h-[420px] max-h-[520px] overflow-y-auto bg-gray-50 p-5">

            {messages.length === 0 ? (
              <div className="flex min-h-[380px] items-center justify-center text-center">

                <div>

                  <div className="text-4xl mb-4">
                    💬
                  </div>

                  <h2 className="text-xl font-bold text-gray-900">
                    Start a conversation
                  </h2>

                  <p className="text-gray-600 mt-2">
                    Send a message to the seller about this listing.
                  </p>

                </div>

              </div>
            ) : (
              <div className="space-y-4">

                {messages.map((item) => {

                  const isBuyer =
                    item.sender === "buyer";

                  return (
                    <div
                      key={item.id}
                      className={`flex ${
                        isBuyer
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >

                      <div className="max-w-[80%]">

                        <div
                          className={`rounded-2xl px-4 py-3 ${
                            isBuyer
                              ? "rounded-br-md bg-blue-600 text-white"
                              : "rounded-bl-md bg-white border border-gray-200 text-gray-900"
                          }`}
                        >
                          {item.text}
                        </div>

                        <p
                          className={`text-xs text-gray-400 mt-1 ${
                            isBuyer
                              ? "text-right"
                              : "text-left"
                          }`}
                        >
                          {item.time}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>
            )}

          </div>

          <div className="border-t border-gray-200 p-4">

            <div className="flex gap-3">

              <input
                type="text"
                value={message}
                onChange={(event) =>
                  setMessage(
                    event.target.value
                  )
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter"
                  ) {
                    sendMessage();
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={sendMessage}
                className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700 transition"
              >
                Send
              </button>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}