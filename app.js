const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];
function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.category !== lastCategory) {
      lastCategory = product.category;
      rows.push(<ProductCategoryRow category={product.category} />);
    }
    rows.push(<ProductRow product={product} />);
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
class FilterableTableProduct extends React.Component {
  render() {
    const { products } = this.props;
    return <ProductTable products={products} />;
  }
}
const root2 = ReactDOM.createRoot(document.querySelector("#app2"));
root2.render(<FilterableTableProduct products={PRODUCTS} />),
  document.querySelector("#app");
