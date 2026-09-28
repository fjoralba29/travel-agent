import type { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
    title: "Impressum",
    description: "Impressum und rechtliche Angaben.",
};

export default function ImprintPage() {
    const { address } = siteConfig;

    return (
        <LegalLayout
            eyebrow='Rechtliches'
            title='Impressum'
            currentLabel='Impressum'
        >
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
                {siteConfig.agentName}
                <br />
                <mark>[Firmenname / Rechtsform, falls vorhanden]</mark>
                <br />
                {address.street}
                <br />
                {address.postalCode} {address.city}
            </p>

            <h2>Kontakt</h2>
            <p>
                Telefon:{" "}
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                <br />
                E-Mail:{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a
                Umsatzsteuergesetz:
                <br />
                <mark>
                    [USt-IdNr. eintragen oder Abschnitt entfernen, falls nicht
                    vorhanden]
                </mark>
            </p>

            <h2>Weitere Pflichtangaben</h2>
            <p>
                <mark>
                    [Falls Sie als selbstständige Reiseberaterin für ein
                    Partnerunternehmen tätig sind, hier die vorgeschriebenen
                    Angaben ergänzen, z. B. Name und Anschrift des
                    Partnerunternehmens, Registergericht und Registernummer,
                    Erlaubnisse oder Aufsichtsbehörde.]
                </mark>
            </p>

            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
                {siteConfig.agentName}
                <br />
                {address.street}
                <br />
                {address.postalCode} {address.city}
            </p>

            <h2>Verbraucherstreitbeilegung</h2>
            <p>
                <mark>[Bitte prüfen und anpassen:]</mark> Wir sind nicht bereit
                oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
                Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG bin ich als
                Diensteanbieterin jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
            </p>
            <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich
                diese Inhalte umgehend entfernen.
            </p>

            <h2>Haftung für Links</h2>
            <p>
                Dieses Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
                Links umgehend entfernen.
            </p>

            <h2>Urheberrecht</h2>
            <p>
                Die von mir erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung der Urheberin. Downloads und Kopien dieser Seite sind
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
                Soweit Inhalte auf dieser Seite nicht von mir erstellt wurden,
                werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um
                einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werde ich derartige Inhalte umgehend
                entfernen.
            </p>

            <h2>Bildnachweise</h2>
            <p>
                <mark>
                    [Quellen der verwendeten Fotos angeben, z. B. eigene
                    Aufnahmen, Name der Bildagentur / Fotograf:in und Lizenz.]
                </mark>
            </p>
        </LegalLayout>
    );
}
