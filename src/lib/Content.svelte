
<div class="content">
  <slot></slot>
</div>

<style lang="scss">
  .content :global {
    line-height: 1.5;

    h1 {
      font-size: 5rem;

      @media (max-width: 768px) {
        font-size: 3.5rem;
        text-decoration: underline;
      }
    }

    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
</style>