import React from "react";
import { useContext } from "react";
import { SelectRoleModal } from "../../Components/Modals/SelectRoleModal/SelectRoleModal";
import { ModalServiceContext } from "../../Components/Modal/ModalService";
import { Layout } from "../../Components/Layout/Layout";
import "./Home.scss";
import "boxicons";

export const Home = () => {

  const { openModal } = useContext(ModalServiceContext);

  return (
    <Layout>
      <section className="home-container" id="home">
        <div className="home-text">
          <h1>
            Find Your Next Perfect
            <br />
            Football Turf To Play <br /> With Your Friends.
          </h1>

          <button
            className="btn"
            onClick={() => openModal({
              title: "",
              width: "350px",
              content: ({ close }) => <SelectRoleModal close={close} />,
            })}
          >
            Sign up
          </button>
        </div>
      </section>
    </Layout>
  );
};

// const TestComponent = () => {
//   const [open, setOpen] = useState()

//   return <div>
//     <button onClick={() => setOpen(!open)}>Toggle counter</button>
//     {open && <Counter />}
//   </div>

// }

// const Counter = () => {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log("mount")
//   }, [])

//   useEffect(() => {
//     console.log("render", count)
//     if (count === 0) {
//       setTimeout(() => setCount(count + 1), 1000)
//     }
//     return () => {
//       console.log("will update", count)
//     }
//   }, [count])

//   return <div><button onClick={() => setCount(count + 1)}>+1</button><div>{count === 0 ? "waiting" : count}</div></div>
// }