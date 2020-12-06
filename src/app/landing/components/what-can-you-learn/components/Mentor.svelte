<script>
  export let mentorName
  export let introduction
  export let institution
</script>

<style>
  .mentor {
    flex: 1;
  }

  .mentor p {
    line-height: 1.1875rem;
    letter-spacing: 0.4px;
  }

  .mentor .institution {
    color: #808080;
  }

  @media only screen and (max-width: 768px) {
    .mentor {
      flex: 1 50%;
      margin-bottom: 0.75rem;
    }

    .mentor p {
      margin-bottom: 0;
    }
  }
</style>

<div class="mentor">
  <div class="mentor-name font-medium">{mentorName}</div>
  <p>{introduction}</p>
  <div class="institution">{institution}</div>
</div>
