import { useState } from "react";
import { Package, ShoppingCart, ClipboardList, Users, ArrowUp, ArrowDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function App() {
  const [open, setOpen] = useState(false);

  const vendasPorCategoria = [
    { categoria: "Eletrônicos", vendas: 400 },
    { categoria: "Roupas", vendas: 300 },
    { categoria: "Casa", vendas: 200 },
    { categoria: "Esportes", vendas: 150 },
  ];

  const tendenciaSemana = [
    { dia: "Seg", vendas: 30 },
    { dia: "Ter", vendas: 50 },
    { dia: "Qua", vendas: 80 },
    { dia: "Qui", vendas: 65 },
    { dia: "Sex", vendas: 120 },
    { dia: "Sab", vendas: 90 },
    { dia: "Dom", vendas: 70 },
  ];

  const produtosMaisVendidos = [
    { nome: "Camiseta Azul", vendas: 120, retorno: 5, tendenciaVendas: "up", tendenciaRetorno: "up", estoque: 35 },
    { nome: "Tênis Esportivo", vendas: 95, retorno: 2, tendenciaVendas: "down", tendenciaRetorno: "down", estoque: 50 },
    { nome: "Notebook Gamer", vendas: 60, retorno: 1, tendenciaVendas: "up", tendenciaRetorno: "up", estoque: 15 },
  ];

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transform transition-transform duration-300 z-20 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">CMJ Digital</h2>
          <button onClick={() => setOpen(false)} className="text-gray-300">
            ✕
          </button>
        </div>
        <ul>
          <li className="mb-2">Dashboard</li>
          <li className="mb-2">Perfil</li>
          <li className="mb-2">Configurações</li>
        </ul>
      </div>

      {/* Overlay escuro */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Conteúdo Principal */}
      <div
        className={`flex-1 p-6 transition-all duration-300 overflow-x-auto ${
          open ? "ml-64" : "ml-0"
        }`}
      >
        {/* Botão para abrir a sidebar */}
        <button
          onClick={() => setOpen(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded mb-4"
        >
          ☰
        </button>

        <h1 className="text-2xl font-bold mt-2 mb-6 text-center">Dashboard</h1>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-full">
              <Package className="w-6 h-6 text-gray-700" />
            </div>
            <div>
              <h2 className="text-gray-600 text-sm font-medium">Total de Produtos</h2>
              <p className="text-3xl font-bold text-gray-800 mt-1">1.250</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-full">
              <ShoppingCart className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-gray-600 text-sm font-medium">Vendas do Dia</h2>
              <p className="text-3xl font-bold text-green-600 mt-1">87</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <ClipboardList className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-gray-600 text-sm font-medium">Novas Ordens</h2>
              <p className="text-3xl font-bold text-blue-600 mt-1">45</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-gray-600 text-sm font-medium">Clientes Ativos</h2>
              <p className="text-3xl font-bold text-purple-600 mt-1">1.032</p>
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Vendas por Categoria</h2>
            <ResponsiveContainer width="100%" height={300} minWidth={0}>
              <BarChart data={vendasPorCategoria} barCategoryGap="5%">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="categoria" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="vendas" fill="#4F46E5" barSize={100} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              Tendência de Vendas na Semana
            </h2>
            <ResponsiveContainer width="100%" height={300} minWidth={0}>
              <LineChart data={tendenciaSemana}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="vendas" stroke="#10B981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Produtos Mais Vendidos */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Produtos Mais Vendidos</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-2 px-4">Produto</th>
                  <th className="text-left py-2 px-4">Vendas</th>
                  <th className="text-left py-2 px-4">Retorno</th>
                  <th className="text-left py-2 px-4">Estoque</th>
                </tr>
              </thead>
              <tbody>
                {produtosMaisVendidos.map((produto, index) => (
                  <tr
                    key={index}
                    className={`border-t ${index % 2 === 0 ? "bg-gray-50" : ""}`}
                  >
                    <td className="py-2 px-4">{produto.nome}</td>

                    {/* Vendas com tendência */}
                    <td className="py-2 px-4 flex items-center gap-1">
                      {produto.vendas}
                      {produto.tendenciaVendas === "up" ? (
                        <ArrowUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-500" />
                      )}
                    </td>

                    {/* Retorno com tendência */}
                    <td className="py-2 px-4 flex items-center gap-1">
                      {produto.retorno}%
                      {produto.tendenciaRetorno === "up" ? (
                        <ArrowUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-500" />
                      )}
                    </td>

                    <td className="py-2 px-4">{produto.estoque}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
