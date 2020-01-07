<script>
  import { CONSTANTS } from "../../data.js";
  let stages = CONSTANTS.STAGES;
</script>

{#if stages}
<div class="wrello_main">
  {#each stages as { slug, label, counter } }
  <div class="wrello_column_stage">
    <div class="wrello_stage_column_header">
      <div class="wrello_stage_column_title">
        <div slug={slug} label={label}>{label}</div>
      </div>
      <div class="wrello_stage_column_counter">{counter}</div>
    </div>
  </div>
  {/each}
</div>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");

  .wrello_main {
    display: flex;
    flex-direction: var(--wrello-main-flex-direction);
    align-items: var(--wrello-main-align-items);
    padding: 8px 8px;
  }

  .wrello_column_stage {
    padding: 8px;
    background-color: #e2e7f2;
    border-radius: 3px;
    margin-left: 0;
    box-shadow: 0 1px 1px 0 #b4c5f3;
    flex: 1 1 0;
    min-width: 200px;
    max-width: 250px;
  }

  .wrello_stage_column_header {
    display: flex;
  }

  .wrello_stage_column_title {
    font-weight: 800;
    font-size: 16px;
    padding: 4px 8px 5px 8px;
    font: 500 16px "Quicksand", Helvetica;
  }

  .wrello_stage_column_counter {
    background-color: var(--wrello-global-color-body-background);
    font-size: 13px;
    font-weight: 800;
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding-top: 7px;
    box-shadow: inset 0 1px 1px 0 #b4c5f3;
  }

  .wrello_column_stage {
    padding: 8px;
    background-color: #e2e7f2;
    border-radius: 3px;
    margin-left: 0;
    box-shadow: 0 1px 1px 0 #b4c5f3;
    flex: 1 1 0;
    min-width: 200px;
    max-width: 250px;
  }

  .wrello_stage_column_header {
    display: flex;
  }

  .wrello_stage_column_title {
    font-weight: 800;
    font-size: 16px;
    padding: 4px 8px 5px 8px;
  }

  .wrello_stage_column_empty {
    margin-top: 10px;
    text-align: center;
    font-style: italic;
    color: #487cec;
    opacity: 0.45;
    padding: var(--wrello-stage-column-empty-vertical-padding)
      var(--wrello-global-measure);
  }
</style>
