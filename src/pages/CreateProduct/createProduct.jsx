import { useRef, useState } from "react";

const CreateProduct = () => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const imageRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateProduct = async () => {
    try {
      const categoryId = selectedCategory;
      const name = nameRef.current.value;
      const description = descriptionRef.current.value;
      const price = priceRef.current.value;
      const image = imageRef.current.value;

      const product = {
        categoryId: parseInt(categoryId),
        name,
        description,
        price: parseFloat(price),
        image,
      };

      const token = localStorage.getItem("@token");

      if (!token) {
        console.error("Token não encontrado. Usuário não autenticado.");
        return;
      }

      const response = await fetch("http://localhost:8080/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setSuccessMessage("Produto criado com sucesso!");
        setErrorMessage(""); // Limpar mensagem de erro, se houver
      } else {
        console.error("Erro ao criar produto:", response.statusText);
        setErrorMessage("Erro ao criar produto. Por favor, tente novamente.");
        setSuccessMessage(""); // Limpar mensagem de sucesso, se houver
      }
    } catch (err) {
      console.error("Erro ao criar produto:", err.message);
      setErrorMessage("Erro ao criar produto. Por favor, tente novamente.");
      setSuccessMessage(""); // Limpar mensagem de sucesso, se houver
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="container mx-auto flex flex-col items-center py-8">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl mb-2">Crie um novo produto</h1>
          <p className="text-xl">Preencha os detalhes do produto abaixo</p>
        </div>
        <div className="mt-20 w-1/2">
          <form className="flex flex-col py-4 px-2 w-full">
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700">
                Categoria
              </label>
              <select
                className="mt-1 p-2 border rounded-md w-full"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
                required
              >
                <option value="">Selecione a Categoria</option>
                <option value="1">Hambúrguer</option>
                <option value="2">Sobremesa</option>
                <option value="3">Bebida</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                ref={nameRef}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700">Descrição</label>
              <textarea
                ref={descriptionRef}
                className="mt-1 p-2 border rounded-md w-full"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700">Preço</label>
              <input
                type="number"
                step="0.01"
                ref={priceRef}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700">URL da Imagem</label>
              <input
                type="text"
                ref={imageRef}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
            <div className="mb-8 text-green-600">{successMessage}</div>
            <div className="mb-8 text-red-600">{errorMessage}</div>
            <button
              type="button"
              onClick={handleCreateProduct}
              className="self-center mt-10 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Criar Produto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
