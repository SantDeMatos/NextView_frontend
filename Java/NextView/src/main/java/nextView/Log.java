package nextView;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Log {

        void IniciarProcessamentoDados() {

            LocalDateTime data = LocalDateTime.now();
            DateTimeFormatter formato = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss:mm:SSS");
            String dataFormatada = formato.format(data);
            String mensagem = "";

            for(int i = 1; i <= 4; i++) {
                if(i == 1) {
                    System.out.println(dataFormatada+" - INFO: Iniciando processamento de dados.");
                } if(i == 2) {
                    System.out.println(dataFormatada + " - DEBUG: Acessando arquivo dados.csv");
                } else if(i == 3) {
                    System.out.println(dataFormatada + " - TRACE: Lendo linhas 1..400");
                    for (int j = 1; j <= 1000; j++) {
                        System.out.println(dataFormatada + " - TRACE: Analisando linha " + j + "... ");
                        if(j == 359) {
                            throw new RuntimeException(" - INFO: Erro ao analisar a linha 359");
                        }
                    }
                }
            }
        }
}
