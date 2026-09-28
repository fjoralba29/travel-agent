import type { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
    title: "Datenschutzerklärung",
    description: "Informationen zum Umgang mit personenbezogenen Daten.",
};

export default function DataProtectionPage() {
    const { address } = siteConfig;

    return (
        <LegalLayout
            eyebrow='Rechtliches'
            title='Datenschutzerklärung'
            currentLabel='Datenschutz'
        >
            <h2>1. Datenschutz auf einen Blick</h2>
            <p>
                Der Schutz Ihrer persönlichen Daten ist mir wichtig. Ich
                behandle Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Datenschutzvorschriften,
                insbesondere der DSGVO, sowie dieser Datenschutzerklärung.
            </p>
            <p>
                Diese Website verwendet keine Cookies für Analyse- oder
                Marketingzwecke und bindet keine Tracking-Dienste ein.
            </p>

            <h2>2. Verantwortliche Stelle</h2>
            <p>
                {siteConfig.agentName}
                <br />
                {address.street}
                <br />
                {address.postalCode} {address.city}
                <br />
                Telefon: {siteConfig.phone}
                <br />
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>

            <h2>3. Hosting und Server-Log-Dateien</h2>
            <p>
                Diese Website wird bei IONOS SE, Elgendorfer Str. 57, 56410
                Montabaur, gehostet. Beim Aufruf der Website erhebt der Hoster
                automatisch Informationen und speichert sie in sogenannten
                Server-Log-Dateien. Das sind:
            </p>
            <ul>
                <li>IP-Adresse des anfragenden Geräts</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>aufgerufene Seite bzw. Datei</li>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>zuvor besuchte Seite (Referrer-URL)</li>
            </ul>
            <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO. Mein berechtigtes Interesse liegt in der technisch
                fehlerfreien Darstellung und der Sicherheit der Website.{" "}
                <mark>
                    [Speicherdauer der Logs laut IONOS ergänzen und bestätigen,
                    dass ein Vertrag zur Auftragsverarbeitung mit IONOS
                    besteht.]
                </mark>
            </p>

            <h2>4. Kontaktaufnahme</h2>
            <h3>Kontaktformular und E-Mail</h3>
            <p>
                Wenn Sie das Kontaktformular nutzen, wird Ihr E-Mail-Programm
                mit den eingegebenen Angaben (Name, E-Mail-Adresse,
                Telefonnummer, Betreff und Nachricht) geöffnet. Die Daten werden
                erst übermittelt, wenn Sie die E-Mail selbst absenden. Ich
                verwende Ihre Angaben ausschließlich, um Ihre Anfrage zu
                bearbeiten und Ihnen zu antworten.
            </p>
            <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre
                Anfrage mit einem Vertrag oder einer Vertragsanbahnung
                zusammenhängt, ansonsten Art. 6 Abs. 1 lit. f DSGVO. Ich lösche
                Ihre Anfrage, sobald sie erledigt ist und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
            </p>
            <p>
                <mark>
                    [Anpassen, sobald das Formular über einen eigenen Server
                    oder einen Formular-Dienst verschickt wird.]
                </mark>
            </p>

            <h3>Telefon und WhatsApp</h3>
            <p>
                Wenn Sie mich telefonisch oder über WhatsApp kontaktieren,
                verarbeite ich Ihre Rufnummer und die Inhalte der Kommunikation
                zur Bearbeitung Ihrer Anfrage. Der Button auf dieser Website
                öffnet lediglich WhatsApp auf Ihrem Gerät. Eine Datenübertragung
                an WhatsApp findet erst statt, wenn Sie dort eine Nachricht
                senden. Anbieter ist WhatsApp Ireland Limited, Merrion Road,
                Dublin 4, Irland. Dessen Datenschutzhinweise gelten dann
                zusätzlich.
            </p>

            <h3>Weitergabe im Rahmen einer Buchung</h3>
            <p>
                Wenn Sie über mich eine Reise buchen, gebe ich die dafür
                erforderlichen Daten an den jeweiligen Reiseveranstalter oder
                Leistungsträger weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
                DSGVO.
            </p>

            <h2>5. Externe Links und Social Media</h2>
            <p>
                Diese Website enthält Links zu externen Diensten, z. B.
                LinkedIn, Instagram, Facebook, Telegram und X. Beim bloßen
                Besuch dieser Website werden keine Daten an diese Anbieter
                übertragen. Erst wenn Sie einen Link anklicken, werden Sie auf
                die Seite des jeweiligen Anbieters weitergeleitet, und dessen
                Datenschutzbestimmungen gelten.
            </p>

            <h2>6. Schriftarten</h2>
            <p>
                Die auf dieser Website verwendeten Schriftarten werden lokal vom
                eigenen Server ausgeliefert. Es findet keine Verbindung zu
                Servern von Google oder anderen Anbietern statt.
            </p>

            <h2>7. Cookies</h2>
            <p>
                Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken.
            </p>

            <h2>8. Ihre Rechte</h2>
            <p>
                Sie haben im Rahmen der gesetzlichen Vorgaben jederzeit das
                Recht auf:
            </p>
            <ul>
                <li>
                    Auskunft über Ihre gespeicherten personenbezogenen Daten
                    (Art. 15 DSGVO)
                </li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>
                    Widerruf einer erteilten Einwilligung mit Wirkung für die
                    Zukunft
                </li>
            </ul>
            <p>
                Dazu genügt eine formlose Mitteilung an die oben genannte
                E-Mail-Adresse.
            </p>

            <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
                Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten
                gegen das Datenschutzrecht verstößt, können Sie sich bei einer
                Aufsichtsbehörde beschweren. Zuständig ist{" "}
                <mark>
                    [bitte prüfen: Der Landesbeauftragte für den Datenschutz und
                    die Informationsfreiheit Baden-Württemberg,
                    Lautenschlagerstraße 20, 70173 Stuttgart]
                </mark>
                .
            </p>

            <h2>10. Aktualität dieser Erklärung</h2>
            <p>
                Stand: <mark>[Monat Jahr eintragen]</mark>. Ich passe diese
                Datenschutzerklärung an, wenn sich die Website oder die
                rechtlichen Vorgaben ändern.
            </p>
        </LegalLayout>
    );
}
