// pages/schedule.tsx
import Head from "next/head";

export default function Schedule() {
  return (
    <>
      <Head>
        <title>Schedule | Graphic Art Festival</title>
        <meta
          name="description"
          content="Check out the complete schedule of events for the Graphic Art Festival, including dates and times for exhibitions, workshops, and more."
        />
      </Head>
      <main>
        <h1>Festival Schedule</h1>
        <p>
          Stay up-to-date with all the events happening during the Graphic Art
          Festival.
        </p>

        {/* Example Schedule */}
        <section>
          <h2>Day 1: Opening Day</h2>
          <ul>
            <li>
              <strong>10:00 AM:</strong> Opening Ceremony
            </li>
            <li>
              <strong>11:30 AM:</strong> Keynote Speech by Jane Doe
            </li>
            <li>
              <strong>2:00 PM:</strong> Exhibition Walkthrough
            </li>
          </ul>
        </section>

        <section>
          <h2>Day 2: Workshops and Talks</h2>
          <ul>
            <li>
              <strong>9:00 AM:</strong> Workshop: The Art of Screen Printing
            </li>
            <li>
              <strong>1:00 PM:</strong> Panel Discussion: Future of Graphic Arts
            </li>
            <li>
              <strong>4:00 PM:</strong> Interactive Public Art Installation
            </li>
          </ul>
        </section>

        <section>
          <h2>Day 3: Closing Day</h2>
          <ul>
            <li>
              <strong>11:00 AM:</strong> Farewell Exhibition
            </li>
            <li>
              <strong>1:00 PM:</strong> Closing Remarks
            </li>
            <li>
              <strong>3:00 PM:</strong> Networking Event
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
