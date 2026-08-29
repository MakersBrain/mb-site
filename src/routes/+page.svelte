<svelte:head>
  <title>MakersBrain — workshop management from material to sale</title>
  <meta name="description" content="MakersBrain connects materials, making, firings, labels, sales and paperwork for independent workshops." />
  <link rel="canonical" href="https://makersbrain.app/" />
  <meta property="og:title" content="MakersBrain" />
  <meta property="og:description" content="One thread from material to sale for independent workshops." />
  <meta property="og:url" content="https://makersbrain.app/" />
</svelte:head>

<main id="main" class="marketing">
  <section class="hero">
    <div class="site-wrap hero-grid">
      <div>
        <h1>Your workshop already has a system. This one remembers it.</h1>
        <p class="hero-copy">Materials, firings, pieces, labels, markets and the paperwork the state wants — one thread, from the clay to the receipt.</p>
        <div class="cta-row">
          <a class="button" href="mailto:hello@makersbrain.app?subject=Early%20access">Ask for early access</a>
          <a class="button secondary" href="#how-it-works">See how it works</a>
        </div>
        <p class="aside">Open source, on Odoo 19. One database per workshop, and it is yours.</p>
      </div>
      <div class="hero-art" aria-hidden="true">
        <svg viewBox="0 0 32 32"><path d="M3 3h26v6H9v20H3Z" fill="currentColor"/><path d="M29 29H3v-6h20V3h6Z" fill="var(--mb-brand)"/><path d="M23 3h6v6h-6Z" fill="currentColor"/></svg>
      </div>
    </div>
  </section>

  <section class="band sunken" id="how-it-works">
    <div class="site-wrap">
      <span class="eyebrow">The idea</span>
      <h2>One thread, end to end</h2>
      <p class="intro">Most workshop software gives you an inventory list, a till, and a spreadsheet for the rest. MakersBrain is built the other way round: one identity that survives every step.</p>
      <div class="thread">
        <article class="thread-step"><h3>A material arrives</h3><p>A sack of stoneware or a bucket of glaze carries its supplier lot and the facts that decide what you are allowed to make with it.</p><span class="source">mb_catalogue_sync · mb_inventory_capture</span></article>
        <article class="thread-step"><h3>A piece is made</h3><p>Thrown, trimmed, assembled. Real work centres and calendars keep long workshop processes intact.</p><span class="source">mb_workshop_base · mb_ceramics_workflow</span></article>
        <article class="thread-step"><h3>It is fired</h3><p>The firing is a record with its programme and load, and supported controllers can provide the schedule without retyping it.</p><span class="source">mb_ceramics_firing · mb_kiln_bridge</span></article>
        <article class="thread-step"><h3>It gets a label</h3><p>A code, QR and physical label resolve to the exact piece—not merely the product family.</p><span class="source">mb_label</span></article>
        <article class="thread-step"><h3>It sells</h3><p>Scan the label at a market, or send it on consignment while retaining its location and sale status.</p><span class="source">mb_label_pos · mb_depot · mb_pos_sumup</span></article>
        <article class="thread-step"><h3>It is declared</h3><p>Market costs and revenue meet the accounting and French micro-enterprise rates that applied in the period.</p><span class="source">mb_commercial_operations · l10n_fr_micro_urssaf</span></article>
      </div>
    </div>
  </section>

  <section class="band" id="capabilities">
    <div class="site-wrap">
      <span class="eyebrow">What it keeps track of</span>
      <h2>The parts you would otherwise keep in your head</h2>
      <p class="intro">Each capability is modular. A workshop can use the label and sales branch without owning a kiln, or add specialist ceramics workflows when it needs them.</p>
      <div class="capabilities">
        <article class="capability"><h3>Pieces and labels</h3><p>Serial identity for one-off work, QR codes for exact pieces, and browser-designed thermal labels.</p><span class="source">mb_label · mb_label_pos</span></article>
        <article class="capability"><h3>Firing</h3><p>Kilns as schedulable resources, firing programmes and loads, and a connector for ROHDE controllers.</p><span class="source">mb_ceramics_firing · mb_kiln_bridge</span></article>
        <article class="capability"><h3>Food-contact compliance</h3><p>Product use determines the applicable lead and cadmium limits instead of relying on memory.</p><span class="source">mb_workshop_base</span></article>
        <article class="capability"><h3>Consignment</h3><p>Know what is out, at which shop, since when, and what has sold.</p><span class="source">mb_depot</span></article>
        <article class="capability"><h3>Markets and profitability</h3><p>See what a market earned after stall fees, travel and working time.</p><span class="source">mb_commercial_operations</span></article>
        <article class="capability"><h3>Payments</h3><p>SumUp payments at the till and against invoices remain connected to the books.</p><span class="source">mb_payment_sumup · mb_pos_sumup</span></article>
        <article class="capability"><h3>French paperwork</h3><p>Micro-enterprise VAT handling and URSSAF declarations use the rates in force for the period.</p><span class="source">l10n_fr_micro_enterprise · l10n_fr_micro_urssaf</span></article>
        <article class="capability"><h3>Capture</h3><p>Photograph a delivery or supplier invoice to read barcodes, products and lot numbers.</p><span class="source">mb_inventory_capture · mb_invoice_capture</span></article>
      </div>
    </div>
  </section>

  <section class="band paper">
    <div class="site-wrap two-column">
      <div><span class="eyebrow">Built on Odoo</span><h2>Not a box you can be locked out of</h2><p class="intro">MakersBrain is a set of AGPL-3 addons for Odoo 19 Community. The specialist workshop features sit on top of real accounting, stock, manufacturing and point of sale.</p><p class="quote">If we stopped tomorrow, your workshop would still open in the morning.</p></div>
      <div class="capabilities">
        <article class="capability"><h3>One database per workshop</h3><p>Your primary records are a database rather than rows mixed into a shared customer table.</p></article>
        <article class="capability"><h3>Real accounting underneath</h3><p>Invoicing, stock moves, manufacturing and point of sale are Odoo's—not a partial reimplementation.</p></article>
        <article class="capability"><h3>Open and inspectable</h3><p>The workshop addons are AGPL-3, so their calculations and workflows can be inspected.</p></article>
      </div>
    </div>
  </section>

  <section class="band sunken" id="status">
    <div class="site-wrap">
      <span class="eyebrow">Where it is today</span><h2>Honestly: early, and specific</h2>
      <p class="intro">MakersBrain is being built in a working ceramics studio. It is furthest along where that studio needed it first, and early access remains a conversation.</p>
      <div class="status-grid">
        <article class="card status-card"><span class="badge good"><span class="dot"></span>Working</span><strong>Ceramics, deeply</strong><p>Firing, glaze, food-contact rules and piece identity are built and tested.</p></article>
        <article class="card status-card"><span class="badge good"><span class="dot"></span>Working</span><strong>France, first</strong><p>Micro-enterprise and URSSAF workflows are built for the regime in front of us.</p></article>
        <article class="card status-card"><span class="badge info"><span class="dot"></span>Verified</span><strong>Automated checks</strong><p>Clean installs, upgrades, workflows and generated outputs are checked continuously.</p></article>
        <article class="card status-card"><span class="badge warn"><span class="dot"></span>Not yet</span><strong>No open sign-up</strong><p>There is no self-service checkout or public price list. Early access starts by email.</p></article>
      </div>
      <div class="cta-row" style="margin-top:var(--mb-space-6)"><a class="button" href="mailto:hello@makersbrain.app?subject=Early%20access">Write to us</a><span class="aside" style="margin:0">hello@makersbrain.app</span></div>
    </div>
  </section>
</main>
