define([],function(){"use strict";var mbType={type:"string",ref:"props.mbType",component:"dropdown",label:"Mediabox type",options:[{value:"image",label:"Image"},{value:"video",label:"Video"},{value:"website",label:"Web site"}]},imageProps={show:function(data){return"image"===data.props.mbType},items:{imageSource:{type:"string",ref:"props.image.source",label:"Image source (Url)",expression:"optional"},imageHorizontalAlign:{type:"string",ref:"props.image.horizontalAlign",component:"buttongroup",label:"Horizontal align",options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],defaultValue:"left"}}},videoProps={show:function(data){return"video"===data.props.mbType},items:{videoType:{type:"string",ref:"props.video.videoType",component:"dropdown",label:"Video type",options:[{value:"video/mp4",label:"MP4"}]},videoPoster:{type:"string",ref:"props.video.poster",label:"Video preview (Url)"},videoSourceMP4:{type:"string",ref:"props.video.sourceMP4",label:"Video source (Url)",expression:"optional",show:function(data){return data.props.video&&data.props.video.videoType&&"video/mp4"===data.props.video.videoType}},videoSourceVimeo:{type:"string",ref:"props.video.sourceVimeo",label:"Vimeo Id",expression:"optional",show:function(data){return data.props.video&&data.props.video.videoType&&"vimeo"===data.props.video.videoType}}}},websiteProps={show:function(data){return"website"===data.props.mbType},items:{settings:{type:"items",label:"Source",items:{websiteSource:{ref:"props.website.source",label:"Web site (Url):",type:"string",expression:"optional",defaultValue:""},websiteScrollbars:{ref:"props.website.scrollBehavior",label:"Scrollbars",type:"string",component:"dropdown",options:[{value:"auto",label:"Auto"},{value:"on",label:"Always on"},{value:"none",label:"Always hidden"}],defaultValue:"none"},websiteNoInteraction:{ref:"props.website.interaction",label:"Interaction",type:"boolean",component:"switch",options:[{value:!0,label:"On"},{value:!1,label:"Off"}],defaultValue:!1}}}}},appearancePanel={uses:"settings",items:{mbSettings:{type:"items",label:"Mediabox definition",items:{ddType:mbType,imageProps:imageProps,videoProps:videoProps,websiteProps:websiteProps}}}};return{type:"items",component:"accordion",items:{appearance:appearancePanel}}});