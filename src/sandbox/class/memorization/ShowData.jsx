import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useCallback, useMemo, useRef, useState } from "react";
import MyButton from "./MyButton";
import AbcIcon from "@mui/icons-material/Abc";

export default function ShowData() {
  const first = useRef();
  const second = useRef();

  const [counter, setCounter] = useState(0);

  const showData = useCallback(() => {
    console.log(first.current.value);
    console.log(second.current.value);
  }, []);
  const showDataCapital = useCallback(() => {
    console.log(first.current.value.toUpperCase());
    console.log(second.current.value.toUpperCase());
    setCounter((prev) => prev + 1);
  }, []);
  const doSomething = useMemo(() => {
    return "something";
  }, []);

  const memoIcon = useMemo(() => {
    return <AbcIcon />;
  }, []);

  return (
    <div>
      <Box>
        <TextField inputRef={first}></TextField>
        <TextField inputRef={second}></TextField>
        <MyButton handleClick={showData} cl={doSomething}>
          Show data
        </MyButton>
        <MyButton handleClick={showDataCapital}>{memoIcon}</MyButton>
        <Typography>{counter}</Typography>
      </Box>
    </div>
  );
}

//memo -
//איתה אנחנו עוטפים קומפוננטה לפני הייצוא שלה
// הפונקציה הזאת עוזרת לקומפוננטה לזכור את הערכים שהיא קיבלה
//אם היא לא קיבלה שום ערך חדש אז היא לא מתרנדרת שוב
//פונקציית ממו יודעת לזכור רק ערכים פרימיטיביים

//useMemo
//עוזרת לנו לשלוח בתור פרופס, ערך מורכב
// אובייקט, מערך או פונקציה שמחזירה איזשהו משהו
// ההוק הזה מקבל פונקציה שמחזירה ערך (מורכב או פשוט)
//ומקבלת גם מערך של דפנדסיז

//useCallback
//עוזרת לנו לשלוח לתוך קומפוננטה
//פונקציית קולבק שעומדת לרוץ בתוך הקומפוננטה
//הוק זה גם מקבל פונקציה ומערך של דפנדסיז
