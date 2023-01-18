import "./pageHeaderStyle.css";

const PageHeader = () => {
  const sum = 5 * 6;

  //תרגיל
  //הגדר מערך של שמות של אנשים
  //יש להציג במסך את שם הבן האדם הראשון ששמו מתחיל באות בי
  const array = ["shalom", "benny", "boris", "yosi"];
  let nameStartWithB = array.find((name) => name[0] === "b");

  //תרגיל
  //הגדר אובייקט בשם "סטודנט" המכיל את התכונות: שם פרטי, שם משפחה גיל וטלפון
  //יש להציג את פרטי הסטודנט בעמוד בצורה נוחה לקריאה
  const student = {
    firstName: "Tzach",
    lastName: "Dabush",
    age: 29,
    phone: "052-222222",
  };

  let myStyle = { color: "red", fontFamily: "arial" };
  return (
    <>
      <h2 style={myStyle}>This is The header!</h2>
      <h2 className="blue">{sum}</h2>
      <p style={{ color: "green", fontFamily: "arial" }}>{nameStartWithB}</p>
      <p>{student.firstName}</p>
      <p>{student.lastName}</p>
      <p>{student.age}</p>
      <p>{student.phone}</p>
    </>
  );
};

export default PageHeader;
