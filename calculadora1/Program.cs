// See https://aka.ms/new-console-template for more information
using System;

class Program
{
    static void Main()
    {
        while (true)
        {
            // Exibe o menu para o usuário
            Console.Clear();
            Console.WriteLine("Calculadora Simples");
            Console.WriteLine("Escolha uma operação:");
            Console.WriteLine("1. Adição");
            Console.WriteLine("2. Subtração");
            Console.WriteLine("3. Multiplicação");
            Console.WriteLine("4. Divisão");
            Console.WriteLine("5. Sair");

            // Lê a escolha do usuário
            string escolha = Console.ReadLine();

            // Se o usuário escolheu sair, termina o loop
            if (escolha == "5")
            {
                break;
            }

            // Solicita os números ao usuário
            Console.Write("Digite o primeiro número: ");
            double num1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Digite o segundo número: ");
            double num2 = Convert.ToDouble(Console.ReadLine());

            // Calcula o resultado com base na escolha do usuário
            double resultado = 0;
            switch (escolha)
            {
                case "1":
                    resultado = num1 + num2;
                    Console.WriteLine($"Resultado da Adição: {resultado}");
                    break;
                case "2":
                    resultado = num1 - num2;
                    Console.WriteLine($"Resultado da Subtração: {resultado}");
                    break;
                case "3":
                    resultado = num1 * num2;
                    Console.WriteLine($"Resultado da Multiplicação: {resultado}");
                    break;
                case "4":
                    if (num2 != 0)
                    {
                        resultado = num1 / num2;
                        Console.WriteLine($"Resultado da Divisão: {resultado}");
                    }
                    else
                    {
                        Console.WriteLine("Erro: Divisão por zero não é permitida.");
                    }
                    break;
                default:
                    Console.WriteLine("Opção inválida.");
                    break;
            }

            // Aguarda o usuário pressionar uma tecla para continuar
            Console.WriteLine("Pressione qualquer tecla para continuar...");
            Console.ReadKey();
        }
    }
}
