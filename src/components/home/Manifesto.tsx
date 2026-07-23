import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';

export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="container">
        <Reveal as="div">
          <div style={{ marginBottom: 40 }}>
            <Eyebrow>The Dawn Chorus position</Eyebrow>
          </div>
          <h2>
            Most golf trips are <em>booked.</em>
            <br />
            Ours are <span className="mark">planned.</span>
            <br />
            There&apos;s a difference,
            <br />
            and it&apos;s in every <em>detail.</em>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
