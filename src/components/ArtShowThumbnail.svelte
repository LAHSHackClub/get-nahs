
<script lang="ts">
  export let item: any = {};
  export let id: number = 0;
  $: studentName = item["Student Name"][0].content;
  $: studentClass = item["Art Class"].name;
  $: studentGrade = item["Grade Level"].name;
</script>

<a href="/show/{id}">
  <figure class="thumbnail">
    <span><img src="{item["Artwork (File)"][0].url}" alt="{studentName}'s Artwork" /></span>
    <figcaption>{studentName}<br>{studentClass}<br>{studentGrade}th Grade</figcaption>
  </figure>
</a>

<style lang="scss">
  a {
    text-decoration: none;
  }
  
  figure {
    background-color: #f5f5f5;
    border: 1px solid #444;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 270px;

    text-align: right;
    overflow: hidden;

    span {
      background-color: #111;
      flex: 1 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;
      min-height: 300px;
    }

    img {
      max-height: 100%;
      max-width: 100%;
    }

    figcaption {
      background-image: linear-gradient(45deg, #333, #222 30%, #2a2a2a 70%);
      border-top: #444 solid 1px;
      border-top-left-radius: 10px;
      color: #fff;
      margin-top: -10px;
      padding: 10px;
      padding-bottom: 15px;
    }
  }
</style>