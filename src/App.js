import { useState } from "react";
import { User } from "./components/User";
import "./App.css";
import { users} from './data'
export const App = () => {
  const [age, setAge] = useState(4);
  const [country, setCountry] = useState();

 const renderCountry = () => {
   switch (country) {
     case 1:
        let arr5 = users.filter((el) => {
          return el.age <= 18 && el.country === "Kyrgyzstan" ;
          });
          return arr5.map((el, id) => {
            return<User el={el} key={id}/>
          })
        case 2:
            let arr6 = users.filter((el) => {
          return el.age <= 18 && el.country === "UAE" ;
          });
          return arr6.map((el, id) => {
            return<User el={el} key={id}/>
          })
          default:
            let arr =users.filter((el) => {
              return el.age<18
            })
            return arr.map((el, id) => {
              return <User el={el} key={id}/>
            })
   }
 }

  const renderUsers = () => {
    switch (age) {
      // 1 - render
      case 1:
       return (
          <>
          <div>
            <button onClick={()=> setCountry(1)}>Kyrgyzstan</button>
            <button  onClick={() => setCountry(2)}>Foreign Counties</button>
              <div>{renderCountry()}</div>
              </div>
          </>
        )
      // 2-render
      case 2:
        let arr2 = users.filter((el) => {
          return el.age > 18 && el.age < 24;
        });
        return arr2.map((el, id) => {
          return <User el={el} key={id} />;
        });
      // 3-render
      case 3:
        let arr3 = users.filter((el) => {
          return el.age >= 24;
        });
        return arr3.map((el, id) => {
          return <User el={el} key={id}  />;
        });
         case 4:
        return users.map((el, id) => {
          return <User el={el} key={id}  />;
        });
      default:
        return "";
    }
  };
  return (
    <div className="App">
      <div className="btns-group">
        <button
          className="btn"
          onClick={() => setAge(1)}
          style={
            age > 18
              ? { backgroundColor: "white" }
              : { backgroundColor: "none" }
          }
        >
          Younger than 18
        </button>
        <button
          className="btn"
          onClick={() => setAge(2)}
          style={
            age > 18 && age > 24
              ? { backgroundColor: "white" }
              : { backgroundColor: "none" }
          }
        >
          Between 18 and 24
        </button>
        <button
          className="btn"
          onClick={() => setAge(3)}
          style={
            age > 24
              ? { backgroundColor: "white" }
              : { backgroundColor: "none" }
          }
        >
          Elder than 24
        </button>
        <button
          className="btn"
          onClick={() => setAge(4)}
          style={
            age < 30
              ? { backgroundColor: "white" }
              : { backgroundColor: "none" }
          }
        >
          All
        </button>
      </div>
      <div className="container">{renderUsers()}</div>
    </div>
  );
};