import { useRef, useEffect, useState, useCallback } from "react";
import SplitedText from "./components/SplitedText";
import { Box, Stack, Typography } from "@mui/material";
import { useKey } from "react-use";
import textData from "./textData.json";

const initialTypingData = {
  text: textData[0],
  textIndex: 0,
  charIndex: 0,
  prevChar: "",
};

function App() {
  const [typingData, setTypingData] = useState(initialTypingData);
  const typingDataRef = useRef();

  const nextTypingData = (textIndex) => {
    // とりあえず出題テキストの配列の最後まで来たら、配列の先頭へ
    const nextIndex = (textIndex + 1) % textData.length;
    return {
      ...initialTypingData,
      textIndex: nextIndex,
      text: textData[nextIndex],
    };
  };

  useEffect(() => {
    typingDataRef.current = typingData;
  }, [typingData]);

  const handleKeyDown = (e) => {
    const typedKey = e.key;

    // 連続で同じ文字の場合はスキップ（押しっぱなしを防ぐため）
    if (typingDataRef.current.prevChar === typedKey) {
      return;
    }
    typingDataRef.current.prevChar = typedKey;

    // 現在押すべき文字を抽出
    const text = typingDataRef.current.text;
    const textIndex = typingDataRef.current.textIndex;
    const charIndex = typingDataRef.current.charIndex;
    const currentChar = text.slice(charIndex, charIndex + 1);

    // 現在押すべき文字の場合は次の文字に進める
    if (typedKey === currentChar) {
      // 最後の文字の場合は次のテキストへ
      const isLastChar = charIndex === text.length - 1;
      if (isLastChar) {
        setTypingData(nextTypingData(textIndex));
      } else {
        setTypingData({ ...typingDataRef.current, charIndex: charIndex + 1 });
      }
    }
  };

  const handleKeyUp = (e) => {
    typingDataRef.current.prevChar = "";
  };

  useKey(true, handleKeyDown, { event: "keydown" });
  useKey(true, handleKeyUp, { event: "keyup" });

  return (
    <div>
      <Stack direction="column" height="100%" margin="20px">
        <Typography variant="subtitle1">
          No.{typingData.textIndex + 1}
        </Typography>
        <SplitedText text={typingData.text} index={typingData.charIndex} />
      </Stack>
    </div>
  );
}

export default App;
