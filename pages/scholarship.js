import PageHeading from "../components/PageHeading";
export default function Misc() {
  return (
    <div>
      <PageHeading
        content={"Scholarship"}
        image={"/assets/scholarship_page_sunburst.png"}
      />
      <div>
        <h2>Publications</h2>
      </div>
      <ul className="hanging-indent-ul">
        <li className="hanging-indent">
          “History, Hair, and Reimagining Racial Categories in Junot Díaz’s{" "}
          <em>The Brief Wondrous Life of Oscar Wao.</em>” Critique: Studies in
          Contemporary Fiction 54.2 (2013): 211–24. Print.&nbsp;
          <a
            href="http://www.tandfonline.com/doi/abs/10.1080/00111619.2011.574747#.Uu2v2D2wJOR"
            target="_blank"
          >
            Abstract
          </a>
        </li>

        <li className="hanging-indent">
          “‘Maps of the World in Its Becoming’: Post-Apocalyptic Naming in
          Cormac McCarthy’s <em>The Road</em>.” Journal of Modern Literature
          33.1 (2009): 57–74. Print. Reprinted in{" "}
          <em>Cormac McCarthy’s The Road (Bloom’s Guides)</em>. Ed. Harold
          Bloom. New York: Chelsea House, 2011. 91–107. Print.&nbsp;
          <a
            href="http://muse.jhu.edu/journals/journal_of_modern_literature/summary/v033/33.1.kunsa.html"
            target="_blank"
          >
            Abstract
          </a>
        </li>
      </ul>
      <h2>Selected Presentations</h2>
      <ul className="hanging-indent-ul">
        <li className="hanging-indent">
          “A ‘Good’ War on Terrorism?: Phil Klay’s <em>Redeployment</em> and the
          Problem of Discrimination.” War, Literature, and the Arts. Conference,
          Colorado Springs, CO. September 2018.
        </li>
        <li className="hanging-indent">
          “Vietnam All Over Again?: Reading Iraq War Fiction in the Shadow of
          Vietnam.” Louisville Conference on Literature and Culture Since 1900,
          Louisville, KY. February 2018.
        </li>
        <li className="hanging-indent">
          “It’s Just Not that Simple: Redeployment and the Just/Unjust Divide.”
          American Literature Association Annual Conference, Boston, MA, May 2017.
        </li>
        {/* <li className="hanging-indent">
          “Revising the 2003 War in Iraq: Genre Switching and Public Discourse
          in David Abrams’ Fobbit.” International Conference on Narrative,
          Lexington, KY, Mar. 23–26, 2017.
        </li>
        <li className="hanging-indent">
          “Just Like a Movie, Only More So: Representation, Reality, and
          Embedded Reporting in Billy Lynn’s Long Halftime Walk,” Pop Cultural
          Association/American Culture Association National Conference, Seattle,
          WA, Mar. 22–25, 2016.
        </li> */}
      </ul>
    </div>
  );
}
