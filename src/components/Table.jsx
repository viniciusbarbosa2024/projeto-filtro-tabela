import React from "react";
import styles from "./Table.module.css"


export const Table = ({productsDisplayed}) => {
  console.log({productsDisplayed})
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {/* Estudar pq o forEach não funciona + ver sobre o key */}
          {productsDisplayed.map((element,index) => {
            return (
              <tr>
                <td>
                  {productsDisplayed[index].name}
                </td>
                <td>
                  {productsDisplayed[index].type}
                </td>
                <td>
                  {productsDisplayed[index].brand}
                </td>
                <td>
                  {productsDisplayed[index].price.toLocaleString('pt-br',{style:'currency',currency: 'BRL'})}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
