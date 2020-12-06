<script>
  export let mentorName
  export let introduction
  export let institution
  export let photoUrl
</script>

<style>
  .mentor {
    flex: 1;
    box-sizing: border-box;
    margin: 1rem 0;
  }

  .mentor:not(:last-child) {
    margin-right: 2.5rem;
  }

  .mentor p {
    line-height: 1.1875rem;
    letter-spacing: 0.4px;
  }

  .mentor .institution {
    color: #808080;
  }

  .mentor-photo {
    position: relative;
    width: 14rem;
    height: 14rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    filter: grayscale(100%);
  }

  .mentor-photo::before {
    content: '';
    position: absolute;
    /* background: linear-gradient(
      180deg,
      rgba(216, 49, 91, 0.7) 0%,
      rgba(216, 49, 91, 0.5) 100%
    ); */
    background-blend-mode: multiply;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 640px) {
    .mentor {
      flex: 1 50%;
      margin-bottom: 0.75rem;
    }

    .mentor:not(:last-child) {
      margin-right: 0;
    }

    .mentor p {
      margin-bottom: 0;
      padding-right: 5%;
      margin-top: 0.25rem;
    }
    .mentor-photo {
      width: 25vw;
      height: 25vw;
    }
  }
</style>

<div class="mentor">
  <div class="mentor-photo"><img src={photoUrl} alt={mentorName} /></div>
  <div class="mentor-name font-medium">{mentorName}</div>
  <p>{introduction}</p>
  <div class="institution">{institution}</div>
</div>
