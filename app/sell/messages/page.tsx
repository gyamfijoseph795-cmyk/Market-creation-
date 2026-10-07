"use client";

import { useEffect, useState } from "react";
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

export default function SellerMessagesPage() {
  const [conversations, setConversations] =
    useState<ChatConversation[]>([]);

  const [sellerId, setSellerId] = useState("");

  useEffect(() => {
    const savedProfile =
      localStorage.getItem("sellerProfile");

    if (savedProfile) {
      try {
        const profile = JSON.parse(savedProfile);

        setSellerId(profile.sellerId || "");
      } catch {
        setSellerId("");
      }
    }

    const savedChats =
      localStorage.getItem("chatConversations");

    if (savedChats) {
      try {
        const allConversations: ChatConversation[] =
          JSON.parse(savedChats);

        setConversations(allConversations);
      } catch {
        setConversations([]);
      }
    }
  }, []);

  const sellerConversations =
    conversations.filter(
      (conversation) =>
        conversation.sellerId === sellerId
    );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">
          Messages
        </h1>

        <p className="text-gray-600 mb-8">
          Conversations with buyers about your listings.
        </p>

        {sellerConversations.length === 0 ? (
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-10 text-center">

            <div className="text-5xl mb-4">
              💬
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              No messages yet
            </h2>

            <p className="text-gray-600 mt-2">
              When a buyer contacts you about a listing,
              the conversation will appear here.
            </p>

          </div>
        ) : (
          <div className="space-y-4">

            {sellerConversations.map((conversation) => {

              const lastMessage =
                conversation.messages[
                  conversation.messages.length - 1
                ];

              const messageCount =
                conversation.messages.length;

              return (
                <Link
                  key={conversation.id}
                  href={`/sell/messages/chat?id=${encodeURIComponent(
                    conversation.id
                  )}`}
                  className="block rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md hover:border-blue-300 transition"
                >

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                    <div>

                      <p className="text-xs font-semibold text-gray-500 uppercase">
                        Listing
                      </p>

                      <h2 className="text-xl font-bold text-gray-900 mt-1">
                        {conversation.listingName}
                      </h2>

                      <p className="text-sm text-gray-500 font-mono mt-2">
                        Listing ID: {conversation.listingId}
                      </p>

                    </div>

                    <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                      {messageCount} message
                      {messageCount === 1 ? "" : "s"}
                    </div>

                  </div>

                  <div className="mt-5 pt-5 border-t border-gray-200">

                    <p className="text-sm text-gray-500">
                      Latest message
                    </p>

                    <p className="text-gray-800 mt-1 line-clamp-2">
                      {lastMessage
                        ? lastMessage.text
                        : "No messages yet"}
                    </p>

                    {lastMessage && (
                      <p className="text-xs text-gray-400 mt-2">
                        {lastMessage.time}
                      </p>
                    )}

                  </div>

                  <div className="mt-5 text-blue-600 font-semibold">
                    Open Conversation →
                  </div>

                </Link>
              );
            })}

          </div>
        )}

      </div>
    </main>
  );
}