"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

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

export default function SellerChatPage() {
  const searchParams = useSearchParams();

  const conversationId =
    searchParams.get("id") || "";

  const [conversation, setConversation] =
    useState<ChatConversation | null>(null);

  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedChats =
      localStorage.getItem("chatConversations");

    if (!savedChats) {
      return;
    }

    try {
      const conversations: ChatConversation[] =
        JSON.parse(savedChats);

      const foundConversation =
        conversations.find(
          (chat) =>
            chat.id === conversationId
        );

      if (foundConversation) {
        setConversation(foundConversation);
      }
    } catch {
      setConversation(null);
    }
  }, [conversationId]);

  const sendMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || !conversation) {
      return;
    }

    const newMessage: Message = {
      id:
        Date.now().toString() +
        Math.random().toString(36).substring(2, 8),
      sender: "seller",
      text: trimmedMessage,
      time: new Date().toLocaleString(),
    };

    const updatedMessages = [
      ...conversation.messages,
      newMessage,
    ];

    const updatedConversation: ChatConversation = {
      ...conversation,
      messages: updatedMessages,
    };

    const savedChats =
      localStorage.getItem("chatConversations");

    let conversations: ChatConversation[] = [];

    if (savedChats) {
      try {
        conversations = JSON.parse(savedChats);
      } catch {
        conversations = [];
      }
    }

    const conversationIndex =
      conversations.findIndex(
        (chat) =>
          chat.id === conversationId
      );

    if (conversationIndex >= 0) {
      conversations[conversationIndex] =
        updatedConversation;
    } else {
      conversations.push(updatedConversation);
    }

    localStorage.setItem(
      "chatConversations",
      JSON.stringify(conversations)
    );

    setConversation(updatedConversation);
    setMessage("");
  };

  if (!conversation) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-3xl">

          <p className="text-sm font-semibold text-blue-600">
            YOUR MARKET
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Conversation Not Found
          </h1>

          <p className="text-gray-600 mb-6">
            This conversation could not be found.
          </p>

          <Link
            href="/sell/messages"
            className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700 transition"
          >
            Back to Messages
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-3xl">

        <div className="mb-5">

          <Link
            href="/sell/messages"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            ← Back to Messages
          </Link>

          <p className="text-sm font-semibold text-blue-600 mt-5">
            YOUR MARKET
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            Buyer Conversation
          </h1>

        </div>

        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">

          <div className="border-b border-gray-200 px-5 py-4">

            <p className="text-sm text-gray-500">
              Listing
            </p>

            <h2 className="text-xl font-bold text-gray-900">
              {conversation.listingName}
            </h2>

            <p className="text-sm text-gray-500 mt-1 font-mono">
              Listing ID: {conversation.listingId}
            </p>

            <p className="text-xs text-gray-500 mt-2 font-mono">
              Seller ID: {conversation.sellerId}
            </p>

          </div>

          <div className="min-h-[420px] max-h-[520px] overflow-y-auto bg-gray-50 p-5">

            <div className="space-y-4">

              {conversation.messages.map(
                (item) => {

                  const isSeller =
                    item.sender === "seller";

                  return (
                    <div
                      key={item.id}
                      className={`flex ${
                        isSeller
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >

                      <div className="max-w-[80%]">

                        <div
                          className={`rounded-2xl px-4 py-3 ${
                            isSeller
                              ? "rounded-br-md bg-blue-600 text-white"
                              : "rounded-bl-md bg-white border border-gray-200 text-gray-900"
                          }`}
                        >
                          {item.text}
                        </div>

                        <p
                          className={`text-xs text-gray-400 mt-1 ${
                            isSeller
                              ? "text-right"
                              : "text-left"
                          }`}
                        >
                          {item.time}
                        </p>

                      </div>

                    </div>
                  );
                }
              )}

            </div>

          </div>

          <div className="border-t border-gray-200 p-4">

            <div className="flex gap-3">

              <input
                type="text"
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Reply to the buyer..."
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