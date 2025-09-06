package nextView;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Log {

        String IniciarProcessamentoDados() {

            LocalDateTime data = LocalDateTime.now();
            DateTimeFormatter formato = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss:mm:SSS");
            String dataFormatada = formato.format(data);
            String mensagem = "";

            for(int i = 1; i <= 4; i++) {
                if(i == 1) {
                    mensagem += dataFormatada + " - INFO: Iniciando processamento de dados.\n";
                } if(i == 2) {
                    mensagem += dataFormatada + " - DEBUG: Acessando arquivo dados.csv\n";
                } else if(i == 3) {
                    mensagem += dataFormatada + " - TRACE: Lendo linhas 1..100\n";
                    for (int j = 1; j <= 1000; j++) {
                        mensagem += dataFormatada + " Analisando linha " + j + "... \n";
                        if(j == 359) {
                            mensagem += dataFormatada + " - ERROR - Erro ao analisar a linha " + j + "\n";
                            break;
//                            RuntimeException erro = new RuntimeException("Erro ao analisar a linha 359");
//                            throw erro; == Irei tratar sobre a implementação deste erro amanhã (06\09)
                        }
                    }
                } else if(i == 4) {
                    mensagem += dataFormatada + " - INFO: Processo finalizado com erro!";
                }
            }

            return mensagem;

        }
}
