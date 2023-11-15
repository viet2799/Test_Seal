let tests = [
  {
    input: "https://cdn.shopify.com/e.jpg?v=15",
    output: "https://cdn.shopify.com/e_100x.jpg?v=15",
    size: "100x",
  },
  {
    input: "https://cdn.shopify.com/e_100x200.jpg?v=15",
    output: "https://cdn.shopify.com/e_x200.jpg?v=15",
    size: "x200",
  },
  {
    input: "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
    output: "https://cdn.shopify.com/e-jpg_100x.jpg?v=15",
    size: "100x",
  },
  {
    input:
      "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
    output:
      "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_x100.jpg?v=15",
    size: "x100",
  },
  {
    input: "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15",
    output: "https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15",
    size: "100x200",
  },
];

const object = {
  input: "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15",
  output: "https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15",
  size: "100x200",
};

function replaceSize(url, size) {
  let regex = /_([^.]*)\.jpg/;

  let match = url.match(regex);

  if (match) {
    let phanTu = match[1];
    url = url.replace(`_${phanTu}.jpg`, `_${size}`);
  } else {
    url = url.replace(".jpg", `_${size}`);
  }

  return url;
}

let newArr = [];
tests?.forEach((value) => {
  newArr.push({
    input: value.input,
    size: value.size,
    output: replaceSize(value.input, value.size),
  });
});

console.log(newArr);
