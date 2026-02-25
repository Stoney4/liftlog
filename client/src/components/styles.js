export const headerStyles = {
  header: {
    height: "70px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    padding: "0 30px",
    backgroundColor: "var(--background-color1)",
    zIndex: 100,
    boxShadow: "1px 1px 15px rgba(161, 182, 253, 0.825)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: "#ffffff"
  },

  logo: {
    fontSize: "27px",
    fontWeight: 600,
    color: "#000000",
  },

  icn: {
    height: "30px",
  },

  menuicn: {
    cursor: "pointer",
  },

  button: {
    borderRadius: "8px",
    border: "1px solid transparent",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: 500,
    fontFamily: "inherit",
    backgroundColor: "#1a1a1a",
    cursor: "pointer",
    transition: "border-color 0.25s",
  },


  navBox:{
    borderRadius: "10px",
    border: "8px solid",
    position: "center",
  },

  navBoxSec:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  },

  navItem:{
    display: "flex", 
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    fontSize: "18px",
    fontWeight: 600,
    color: "black",
  },

  message: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    position: "relative",
    cursor: "pointer",
  },

  circle: {
    height: "7px",
    width: "7px",
    position: "absolute",
    backgroundColor: "#fa7bb4",
    borderRadius: "50%",
    left: "19px",
    top: "8px",
  },

  dp: {
    height: "40px",
    width: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  logosec: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
};

export const footerStyles ={

}

export const bodyStyles ={

    body:{
        backgroundColor: "#3047e0ff",
        width: "100vw",
        height: "100vh",
    }, 

    boxContainer:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "50px",
        minHeight: "100vh"
    },

    box:{
        height: "130px",
        width: "230px",
        borderRadius: "20px",
        padding: "20px",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",

        backgroundColor: "#ffffff",
        color: "white",

        boxShadow: "3px 3px 10px rgba(0, 30, 87, 0.35)",
        cursor: "pointer",
        transition: "transform 0.25s ease-in-out",
        },

    boxText:{
        display: "flex", 
        flexDirection: "column",
        gap: "6px",
        fontFamily: "inherit",
        fontSize: "18px",
        fontWeight: 400,
        color: "#000000"
    },
};