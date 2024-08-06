import React from "react";
import styles from "./Table.module.css"


export const Table = ({productsDisplayed}) => {
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>
              <select name="type" id="type">
                {/* Anotar sobre o uso do css inline no jsx */}
                <option value="" style={{display: 'none'}}>Tipo</option>
                
                <option value="foods">Alimentos</option>

                <option value="drinks">Bebidas</option>

                <option value="accessories">Acessórios</option>

                <option value="clothes">Roupas</option>
              </select>
            </th>
            <th>Marca</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {/* Estudar pq o forEach não funciona + ver sobre o key */}
          
          {/* Algoritmo para gerar a tabela a partir do array enviado */}
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
