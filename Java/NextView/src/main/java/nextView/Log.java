package nextView;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList; // Biblioteca importada para utilização de listas/arrays
import java.util.List; // Biblioteca importada para utilização de listas/arrays

public class Log {

        String IniciarProcessamentoDados() {

            LocalDateTime data = LocalDateTime.now();
            DateTimeFormatter formato = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
            String dataFormatada = formato.format(data);
            String mensagem = "";

            for(int i = 1; i <= 5; i++) {
                if(i == 1) {
                    mensagem += dataFormatada + " - INFO: Iniciando processamento de dados.\n";
                } if(i == 2) {
                    mensagem += dataFormatada + " - DEBUG: Acessando arquivo dados.csv\n";
                } else if(i == 3) {
                    mensagem += dataFormatada + " - TRACE: Lendo linhas 1..100\n";
                } else if(i == 4) {
                    mensagem += dataFormatada + " - ERROR: Erro ao ler linha 359: java.lang.RuntimeException: Erro at school.sptech.Logs.rodarLogs(Logs.java:27)\n" +
                            "school.sptech.Main.main(Logs.java:7)\n";
                } else if(i == 5) {
                    mensagem += dataFormatada + " - INFO: Processo finalizado com erro!";
                }
            }

            return mensagem;

        }
}

// RELATÓRIO - versão 1 sobre o Log: Estrutura básica concluída, sem ser dinâmica até por conta de parametrização,
// onde se necessita de alguns dados de que não temos acesso no momento.;
//
// PRÓXIMOS PASSOS: Adaptar à nossa regra de negócio, para posterior integração ao site, e ao BD.
//
// OBSERVAÇÕES: List<String> registrosLog = new ArrayList<>(); = Tentei implementar com lista, não deu tão certo,
// por conta da formatação de output/console, que não está legal.
// Irei verificar a possibilidade de implementação da ideia nas outras versões.