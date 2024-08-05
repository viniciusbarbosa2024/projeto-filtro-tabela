import React from "react";
import styles from "./Table.module.css"
import products from "./products";

export const Table = () => {
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
          {products.map((element,index) => {
            return (
              <tr>
                <td>
                  {products[index].name}
                </td>
                <td>
                  {products[index].type}
                </td>
                <td>
                  {products[index].brand}
                </td>
                <td>
                  {products[index].price.toLocaleString('pt-br',{style:'currency',currency: 'BRL'})}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
