import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

const courseMap = {
  //app.js dekileri aldım
  Angular: Angular,
  Bootstrap: Bootstrap,
  Ccsharp: Ccsharp,
  KompleWeb: KompleWeb,
};

function Course({ courseName }) {
  return (
    <div className="col-4 my-2">
      <div className="card p-2">
        <img src={courseMap[courseName]} alt="course" />
      </div>
    </div>
  );
}

export default Course;
