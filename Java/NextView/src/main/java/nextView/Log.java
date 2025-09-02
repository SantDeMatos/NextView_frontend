package nextView;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Log {

    public static void main(String[] args) {

        LocalDateTime data = LocalDateTime.now();
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String dataFormatada = formato.format(data);

        System.out.println(dataFormatada);

        // Estrutura de logs: Guilherme Enrique Dias

    }

}
