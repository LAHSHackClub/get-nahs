
<script lang="ts">
  export let item: any = {};
  $: studentName = item["Student Name"].content;
  $: studentClass = item["Art Class"].name;
  $: studentGrade = item["Grade Level"].name;
</script>

<figure class="thumbnail">
  <span><img src="{item["Artwork (File)"].url}" alt="{studentName}'s Artwork" /></span>
  <figcaption>{studentName}<br>{studentClass}<br>{studentGrade}th Grade</figcaption>
</figure>

<style lang="scss">
  figure {
    background-color: #f5f5f5;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 230px;

    text-align: right;
    overflow: hidden;

    span {
      background-color: #dfcedf;
      flex: 1 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      border-radius: 5px;
      max-height: 100%;
      max-width: 100%;
    }

    figcaption {
      background-image: linear-gradient(45deg, #eef, #ede 30%, #fee);
      border-radius: 10px;
      margin-top: -10px;
      padding: 15px;
      padding-bottom: 15px;
    }
  }
</style>