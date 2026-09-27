import { useState } from "react";
import {
  FiSend,
  FiX,
  FiUser,
  FiCpu,
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! 👋 I'm Prabhul's AI assistant. Ask me anything about his skills, experience, projects, or education.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const message = input.trim();

    if (!message || loading) {
      return;
    }

    // Add user message
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/chat/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong."
        );
      }

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text:
          data.reply ||
          "Sorry, I couldn't generate a response.",
      };

      setMessages((previous) => [
        ...previous,
        botMessage,
      ]);

    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Sorry, I couldn't connect to the AI assistant. Please try again.",
        },
      ]);

    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* CHAT BUTTON */}

      {!isOpen && (
       <button
  onClick={() => setIsOpen(true)}
  className="
    fixed
    bottom-6
    right-6
    z-[9999]
    w-14
    h-14
    rounded-full
    bg-[#111827]
    border
    border-green-500/40
    text-green-400
    shadow-[0_0_20px_rgba(34,197,94,0.35)]
    flex
    items-center
    justify-center
    hover:scale-110
    hover:bg-[#16231c]
    hover:text-green-300
    hover:shadow-[0_0_30px_rgba(34,197,94,0.55)]
    transition-all
    duration-300
  "
  aria-label="Open AI chatbot"
>
  <FaRobot size={30} />
</button>
      )}

      {/* CHAT WINDOW */}

      {isOpen && (
        <div
          className="
            fixed
            bottom-6
            right-6
            z-[9999]
            w-[380px]
            max-w-[calc(100vw-32px)]
            h-[550px]
            max-h-[calc(100vh-100px)]
            bg-white
            rounded-2xl
            shadow-2xl
            border
            border-gray-200
            overflow-hidden
            flex
            flex-col
          "
        >
          {/* HEADER */}

          <div
            className="
              bg-black
              text-white
              px-5
              py-4
              flex
              items-center
              justify-between
            "
          >
            <div className="flex items-center gap-3">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-white/10
                  flex
                  items-center
                  justify-center
                "
              >
                <FiCpu size={20} />
              </div>

              <div>
                <h3 className="font-semibold">
                  Prabhul AI
                </h3>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>

                  <span className="text-xs text-gray-300">
                    AI Assistant
                  </span>
                </div>
              </div>

            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="
                w-9
                h-9
                rounded-full
                hover:bg-white/10
                flex
                items-center
                justify-center
                transition
              "
              aria-label="Close chatbot"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* MESSAGES */}

          <div
            className="
              flex-1
              overflow-y-auto
              p-4
              space-y-4
              bg-gray-50
            "
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`
                  flex
                  ${
                    message.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }
                `}
              >
                <div
                  className={`
                    flex
                    gap-2
                    max-w-[85%]
                    ${
                      message.sender === "user"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }
                  `}
                >
                  {/* ICON */}

                  <div
                    className={`
                      shrink-0
                      w-8
                      h-8
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ${
                        message.sender === "user"
                          ? "bg-black text-white"
                          : "bg-gray-200 text-gray-700"
                      }
                    `}
                  >
                    {message.sender === "user" ? (
                      <FiUser size={15} />
                    ) : (
                      <FiCpu size={15} />
                    )}
                  </div>

                  {/* MESSAGE */}

                  <div
                    className={`
                      px-4
                      py-3
                      rounded-2xl
                      text-sm
                      leading-relaxed
                      whitespace-pre-wrap
                      ${
                        message.sender === "user"
                          ? "bg-black text-white rounded-tr-sm"
                          : "bg-white text-gray-800 border border-gray-200 rounded-tl-sm"
                      }
                    `}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}

            {/* LOADING */}

            {loading && (
              <div className="flex justify-start">
                <div className="flex gap-2 items-center">

                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-gray-200
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FiCpu size={15} />
                  </div>

                  <div
                    className="
                      bg-white
                      border
                      border-gray-200
                      rounded-2xl
                      rounded-tl-sm
                      px-4
                      py-3
                    "
                  >
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>

                      <span
                        className="
                          w-2
                          h-2
                          bg-gray-400
                          rounded-full
                          animate-bounce
                          [animation-delay:150ms]
                        "
                      ></span>

                      <span
                        className="
                          w-2
                          h-2
                          bg-gray-400
                          rounded-full
                          animate-bounce
                          [animation-delay:300ms]
                        "
                      ></span>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* INPUT */}

          <div
            className="
              p-3
              bg-white
              border-t
              border-gray-200
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                border
                border-gray-300
                rounded-xl
                px-3
                py-2
                focus-within:border-black
                transition
              "
            >
              <input
                type="text"
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask about Prabhul..."
                disabled={loading}
                className="
                  flex-1
                  outline-none
                  text-sm
                  bg-transparent
                  min-w-0
                  text-gray-800
                  placeholder-gray-400
                "
              />

              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="
                  w-9
                  h-9
                  rounded-lg
                  bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                  transition
                  hover:bg-gray-800
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                "
                aria-label="Send message"
              >
                <FiSend size={16} />
              </button>
            </div>

            <p className="text-[10px] text-gray-400 text-center mt-2">
              Powered by Gemini AI
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;