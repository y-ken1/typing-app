/** @jsxImportSource @emotion/react */
import { Box, Button, Stack } from "@mui/material";
import { css } from "@emotion/react";

function getPositionType(index, curentPos) {
  if (curentPos < index) {
    return -1;
  } else if (curentPos == index) {
    return 0;
  } else {
    return 1;
  }
}

const charStyle = (positionType) => css`
  color: #000;
  font-size: 32px;
  font-weight: bold;
  background-color: ${positionType === 0
    ? "pink"
    : positionType === -1
    ? "grey"
    : "lightgrey"};
  border: 2px solid ${positionType === 0 ? "#f08080" : "transparent"};
  padding: 2px;
  margin-right: 2px;
  max-width: 35px;
  min-width: 35px;
  margin-right: 8px;
  text-align: center;
  border-radius: 3px;
`;

function SplitedText({ text, index: currentCharIndex }) {
  return (
    <div>
      <Stack direction="row">
        {text.split("").map((dispChar, dispCharIndex) => (
          <div
            key={dispCharIndex}
            css={charStyle(getPositionType(currentCharIndex, dispCharIndex))}
          >
            {dispChar}
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default SplitedText;
