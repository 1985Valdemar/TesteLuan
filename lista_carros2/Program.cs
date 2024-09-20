using System;
using System.Collections.Generic;

class Program
{
    // Classe Carro com propriedades
    class Carro
    {
        public string Cor { get; set; }
        public int Ano { get; set; }
        public string Modelo { get; set; }
        public string Fabricante { get; set; }

        // Construtor para inicializar as propriedades
        public Carro(string cor, int ano, string modelo, string fabricante)
        {
            Cor = cor;
            Ano = ano;
            Modelo = modelo;
            Fabricante = fabricante;
        }

        // Método para exibir as informações do carro
        public void ExibirInfo()
        {
            Console.WriteLine($"Fabricante: {Fabricante}");
            Console.WriteLine($"Modelo: {Modelo}");
            Console.WriteLine($"Ano: {Ano}");
            Console.WriteLine($"Cor: {Cor}");
            Console.WriteLine(); // Linha em branco para separar os carros
        }
    }

    static void Main()
    {
        // Cria uma lista de carros com alguns carros iniciais
        List<Carro> listaDeCarros = new List<Carro>
        {
            new Carro("Vermelho", 2020, "Civic", "Honda"),
            new Carro("Preto", 2019, "Corolla", "Toyota"),
            new Carro("Branco", 2021, "Model S", "Tesla"),
            new Carro("Azul", 2018, "Focus", "Ford")
        };

        // Loop principal para exibir o menu e processar as escolhas do usuário
        while (true)
        {
            Console.Clear();
            ExibirListaDeCarros(listaDeCarros); // Exibe a lista de carros atualizada

            Console.WriteLine("Escolha uma opção:");
            Console.WriteLine("1. Adicionar um novo carro");
            Console.WriteLine("2. Sair");
            Console.Write("Opção: ");

            string escolha = Console.ReadLine();

            if (escolha == "2")
                break;

            if (escolha == "1")
            {
                // Solicita informações do novo carro
                Console.Write("Digite a cor do carro: ");
                string cor = Console.ReadLine();

                Console.Write("Digite o ano de fabricação do carro: ");
                int ano;
                while (!int.TryParse(Console.ReadLine(), out ano) || ano <= 0)
                {
                    Console.Write("Ano inválido. Digite novamente: ");
                }

                Console.Write("Digite o modelo do carro: ");
                string modelo = Console.ReadLine();

                Console.Write("Digite o fabricante do carro: ");
                string fabricante = Console.ReadLine();

                // Adiciona o novo carro à lista
                listaDeCarros.Add(new Carro(cor, ano, modelo, fabricante));

                Console.WriteLine("Carro adicionado com sucesso!");
            }
            else
            {
                Console.WriteLine("Opção inválida. Tente novamente.");
            }

            Console.WriteLine("Pressione qualquer tecla para continuar...");
            Console.ReadKey();
        }
    }

    // Método para exibir a lista de carros
    static void ExibirListaDeCarros(List<Carro> listaDeCarros)
    {
        Console.WriteLine("Lista de Carros:");
        foreach (var carro in listaDeCarros)
        {
            carro.ExibirInfo();
        }
    }
}
