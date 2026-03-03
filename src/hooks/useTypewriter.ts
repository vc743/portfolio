import { useEffect, useRef, useState } from "react";

const useTypewriter = (
  words: readonly string[],
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseMs = 2200
) => {
  const [text, setText] = useState("");
  const stateRef = useRef({ wordIndex: 0, charIndex: 0, isDeleting: false });
  const wordsRef = useRef(words);

  // Always keep wordsRef in sync with latest words (language changes)
  wordsRef.current = words;

  // Reset when language changes (words reference changes identity)
  useEffect(() => {
    stateRef.current = { wordIndex: 0, charIndex: 0, isDeleting: false };
    setText("");
  }, [words]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const s = stateRef.current;
      const word = wordsRef.current[s.wordIndex % wordsRef.current.length];

      if (!s.isDeleting) {
        s.charIndex++;
        setText(word.slice(0, s.charIndex));

        if (s.charIndex === word.length) {
          // Full word typed — pause then start deleting
          timer = setTimeout(() => {
            s.isDeleting = true;
            tick();
          }, pauseMs);
          return;
        }
        timer = setTimeout(tick, typingSpeed);
      } else {
        s.charIndex--;
        setText(word.slice(0, s.charIndex));

        if (s.charIndex === 0) {
          s.isDeleting = false;
          s.wordIndex++;
          // Brief pause before typing next word
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, deletingSpeed);
      }
    };

    // Initial delay before starting
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words]);

  return text;
};

export default useTypewriter;
