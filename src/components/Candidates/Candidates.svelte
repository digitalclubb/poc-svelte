<script>
  import { onMount } from "svelte";
  import { candidates } from "../../mock_data/getCandidates.json";
  let candidate = candidates;
</script>

<div class="wrello_main">
  {#if candidate}{#each candidate as { name, stage, headline }}
  <div class="wrello_column_stage">
    <div class="wrello_stage_candidate_card">
      <div class="wrello_canditdate_item_date">
        <div class="wrello_canditdate_item_date_applied">
          <label class="wrello_canditdate_item_date_applied_label">
            Applied
          </label>
          <span class="wrello_canditdate_item_date_applied_moment">
            2 months ago
          </span>
        </div>
        <div class="wrello_canditdate_item_date_stage">35</div>
      </div>
      <div class="wrello_candidate_name">{name}</div>
      <div class="wrello_candidate_stage">{stage}</div>
      <div class="wrello_candidate_title">{headline}</div>
    </div>
  </div>
  {/each} {/if}
</div>

<style>
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

  .wrello_stage_candidate_card {
    margin-top: 10px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 #b4c5f3;
    padding: 8px 0 16px 8px;
  }

  .wrello_canditdate_item_date {
    display: flex;
  }

  .wrello_canditdate_item_date_applied {
    display: flex;
    flex-direction: column;
    color: #757575;
    flex-grow: 1;
  }

  .wrello_canditdate_item_date_applied_label {
    padding-top: 1px;
    font-size: 9px;
    margin-bottom: 0;
  }
  .wrello_canditdate_item_date_applied_moment {
    font-size: 12px;
    padding-bottom: 0;
  }

  .wrello_stage_green {
    background-color: lime;
  }

  .wrello_stage_yellow {
    background-color: yellow;
  }

  .wrello_candidate_name {
    padding-bottom: 4px;
    margin-right: 8px;
    white-space: var(--wrello-candidate-name-white-space);
    min-width: 0;
    text-overflow: ellipsis;
    overflow-x: hidden;
  }

  .wrello_candidate_name a {
    color: #585858;
    font-size: 16px;
    font-weight: 600;
  }

  .wrello_candidate_title {
    color: #919394;
    padding-bottom: 16px;
    font-size: 12px;
  }

  .wrello_candidate_tag {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #d0d6dd;
    padding-top: 8px;
    margin-right: 8px;
  }

  .wrello_candidate_tag span {
    color: #fff;
    font-size: var(--wrello-candidate-tag-span-font-size);
    border-radius: 3px;
    padding: var(--wrello-candidate-tag-span-padding);
    margin-top: 8px;
    margin-right: 8px;
    background-color: #9493aa;
  }

  .wrello_candidate_tag span:before {
    content: "#";
  }

  span.wrello_tags_color_code_position {
    background-color: #487cec;
  }

  span.wrello-tags_color_code_people {
    background-color: #7e3aec;
  }

  span.wrello_tags_color_code_status {
    background-color: #eba748;
  }

  span.wrello_tags_color_code_stage {
    background-color: #e93ab7;
  }

  span.wrello_tags_color_code_special {
    background: #40e0d0;
    background: linear-gradient(-45deg, #40e0d0, #ff8c00, #ff0080);
  }

  .wrello_canditdate_item_date_stage {
    border-radius: 15px;
    color: #fff;
    background-color: #b52015;
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
    margin-right: 8px;
    margin-bottom: 8px;
    padding-top: 6px;
    font-size: 14px;
    text-align: center;
    box-shadow: 0 2px 1px 0 #b4c5f3;
  }

  .wrello_date_stage_color_code_green {
    background-color: #055e2f;
  }

  .wrello_date_stage_color_code_ambar {
    background-color: #d69a22;
  }
</style>
