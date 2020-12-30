<script>
  export let data, helpers;
</script>

<style>
  a {
    margin-bottom: 1rem;
    display: inline-block;
  }
  h1 {
    color: red;
  }
  .iframe_cont {
    width: 100px;
    height: 100px;
    display: block;
    border: 1px solid red;
  }
</style>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<a href="/">&LeftArrow; Home</a>

<h1>{data.title}</h1>

<ul>
  {#each data.steps as step}
    <li>{step}</li>
  {/each}
</ul>


{#each data.content as step1}
  <p>{step1}</p>
{/each}

<hr>

{#each data.archieml.section1 as section, idx}
  <section class="section-{idx}">
    <article>
      <h2>{section.title}</h2>
      <p><small>{section.date}</small></p>
      {#each section.content as para}
        {#if para.type === "p"}
          {#each para as x}
            <p>{x}</p>
          {/each}
        {/if}
        {#if para.type === "img"}
          <img class="{para.class}" src={para.src} alt="" />
          <p class="caption">{para.caption}</p>
        {/if}
      {/each}
    </article>
  </section>
{/each}

<hr>

{JSON.stringify(data.archieml)}