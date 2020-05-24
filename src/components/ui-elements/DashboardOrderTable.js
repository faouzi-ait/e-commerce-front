import React from "react";

function DashboardOrderTable({ user }) {
  return (
    <>
      <table
        style={{
          marginTop: "-1rem",
          textAlign: "left",
        }}
      >
        {user.history.map((item) => (
          <>
            <tr
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              <td
                style={{
                  width: "50%",
                }}
              >
                Order Date:
              </td>
              <td></td>
              <td></td>
              <td
                style={{
                  width: "50%",
                }}
              >
                {item[item.length - 1].split("T")[0]}
              </td>
            </tr>
            {item.map((product, i) =>
              i !== item.length - 1 ? (
                <tr>
                  <td>{product.name.substring(0, 10)}</td>
                  <td>${product.price}</td>
                  <td>x{product.quantity}</td>
                  <td style={{ textAlign: "right" }}>
                    ${product.quantity * product.price}
                  </td>
                </tr>
              ) : (
                ""
              )
            )}
          </>
        ))}
      </table>
    </>
  );
}

export default DashboardOrderTable;
