<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// È necessario scaricare e includere i file di PHPMailer
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Controlla se i dati sono stati inviati con il metodo POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // 1. **Dati del Form (Recupero e Pulizia)**
    // Raccogli i dati inviati dal tuo form Next.js
    $nome_cognome = isset($_POST['nombre']) ? htmlspecialchars($_POST['nombre']) : '';
    $azienda = isset($_POST['empresa']) ? htmlspecialchars($_POST['empresa']) : '';
    $cargo = isset($_POST['cargo']) ? htmlspecialchars($_POST['cargo']) : '';
    $email_mittente = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $telefono = isset($_POST['numero']) ? htmlspecialchars($_POST['numero']) : '';
    $usa_sap = isset($_POST['sap']) ? 'Sì' : 'No';

    // 2. **Configurazione dell'Email (SMTP)**
    $mail = new PHPMailer(true);

    try {
        // Configurazione del Server (Usa i dati forniti dal tuo provider)
        $mail->isSMTP();
        $mail->Host       = 'smtp.tuodominio.com'; // Esempio: Inserisci l'Host SMTP (es. mail.tuodominio.com)
        $mail->SMTPAuth   = true;
        $mail->Username   = 'noreply@tuodominio.com'; // L'email 'noreply' fornita dal tuo provider
        $mail->Password   = 'LaTuaPasswordSMTP'; // La password dell'email 'noreply'
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // O PHPMailer::ENCRYPTION_STARTTLS
        $mail->Port       = 465; // O 587 (a seconda della tua configurazione SMTPS/STARTTLS)

        // 3. **Destinatari e Contenuto**
        
        // Mittente (l'email noreply)
        $mail->setFrom('noreply@tuodominio.com', 'Modulo di Contatto');
        // Destinatario (la tua email personale dove vuoi ricevere i dati)
        $mail->addAddress('tuaemail@tuodominio.com', 'Il Tuo Nome'); 

        // Contenuto dell'Email
        $mail->isHTML(true);
        $mail->Subject = 'Nuova Richiesta Demo da ' . $nome_cognome;
        $body_content = "
            <h2>Dettagli Richiesta Demo</h2>
            <p><strong>Nome e Cognome:</strong> {$nome_cognome}</p>
            <p><strong>Azienda:</strong> {$azienda}</p>
            <p><strong>Cargo:</strong> {$cargo}</p>
            <p><strong>Email:</strong> {$email_mittente}</p>
            <p><strong>Telefono:</strong> {$telefono}</p>
            <p><strong>Utilizza SAP Business One:</strong> {$usa_sap}</p>
        ";
        $mail->Body    = $body_content;
        $mail->AltBody = "Nuova Richiesta Demo:\nNome: {$nome_cognome}\nAzienda: {$azienda}\nEmail: {$email_mittente}\nSAP: {$usa_sap}";

        $mail->send();
        
        // Risposta di Successo
        http_response_code(200);
        echo json_encode(['status' => 'success', 'message' => 'Email inviata con successo!']);

    } catch (Exception $e) {
        // Risposta di Errore
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => "Errore nell'invio: {$mail->ErrorInfo}"]);
    }
} else {
    // Se non è una richiesta POST
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Metodo non permesso']);
}

?>