import Button from "./Button";
import "./buttonstyle.css";
export default function Sidemenu({ buttonName = "click me", childern }) {
  return (
    <div style={{ margin: "20px", padding: "20px", border: "solid 5px teal" }}>
      <Button butt="المفضل">
        <div>
          <span>JJJJJJ</span>
        </div>
      </Button>
      <Button butt="الأهم">
        <div>
          <span>llllll</span>
        </div>
      </Button>
      <Button butt="الأكثر">
        <div>
          <span>JJJJJJ</span>
        </div>
      </Button>
      <Button butt="المميز">
        <div>
          <span>JJJJJJ</span>
        </div>
      </Button>
      <Button butt="العملي">
        <div>
          <span>JJJJJJ</span>
        </div>
      </Button>
    </div>
  );
}
