
<script lang="ts">
  export let item: any = {};
  export let show: string = "";
  export let id: number = 0;
  $: studentName = item["Student Name"];
  $: studentGrade = `${item["Grade Level"].name}th Grade`;
</script>

<a href="/show/{show}-{id}">
  <figure class="thumbnail">
    <span><img src="{item["Artwork (File)"][0].icon}" alt="{studentName}'s Artwork" /></span>
    <figcaption>
      <b>{studentName}</b><br>{studentGrade}<br>
    </figcaption>
  </figure>
</a>

<style lang="scss">
  a {
    text-decoration: none;
  }
  
  figure {
    border: 1px solid #333;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 250px;

    text-align: right;
    overflow: hidden;

    span {
      background-color: #000;
      flex: 1 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;
      min-height: 300px;
      user-select: none;
    }

    img {
      max-height: 300px;
      max-width: 100%;
    }

    figcaption {
      background-color: #000;
      border-top: #333 solid 1px;
      border-top-left-radius: 10px;
      color: #fff;
      line-height: 1.5;
      margin-top: -10px;
      padding: 10px;
      padding-bottom: 15px;

      b {
        font-size: 1.4rem;
      }
    }

    @media (max-width: 768px) {
      width: 220px;

      span {
        height: 250px;
        min-height: 250px;
      }

      img {
        max-height: 250px;
      }
    }
  }
</style>