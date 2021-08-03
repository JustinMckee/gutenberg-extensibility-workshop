import { get } from "lodash";

import "./style.scss";
import { registerBlockType } from "@wordpress/blocks";
import { PlainText } from "@wordpress/editor";

// // Higher Order Component used to generate unique id per component instance
// import { withInstanceId } from "@wordpress/components";

registerBlockType("gew/meta-block", {
  title: "05 - Meta Block",
  icon: "welcome-learn-more",
  category: "common",

  attributes: {
    description: {
      type: "string",
      source: "meta", // Define that this attribute is stored in a meta field
      meta: "short_description" // Name of the custom field used to store/fetch the attribute
    }
  },

  edit({ className, attributes, setAttributes }) {
      const { description } = attributes;
      const updateDescription = description => setAttributes({ description });

      return (
        <div className={className}>
          <label>Short Description</label>
          <PlainText
            value={description}
            onChange={updateDescription}
          />
        </div>
      );
    },

  // In general meta blocks don't render anything
  // But it's up to the block author really.
  save() {
    return null;
  }
});
