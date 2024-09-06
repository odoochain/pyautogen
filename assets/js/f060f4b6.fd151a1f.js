"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7302],{58506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(85893),a=t(11151);const r={sidebar_label:"generate_images",title:"agentchat.contrib.capabilities.generate_images"},s=void 0,l={id:"reference/agentchat/contrib/capabilities/generate_images",title:"agentchat.contrib.capabilities.generate_images",description:"ImageGenerator",source:"@site/docs/reference/agentchat/contrib/capabilities/generate_images.md",sourceDirName:"reference/agentchat/contrib/capabilities",slug:"/reference/agentchat/contrib/capabilities/generate_images",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/generate_images",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/website/docs/reference/agentchat/contrib/capabilities/generate_images.md",tags:[],version:"current",frontMatter:{sidebar_label:"generate_images",title:"agentchat.contrib.capabilities.generate_images"},sidebar:"referenceSideBar",previous:{title:"agent_capability",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/agent_capability"},next:{title:"teachability",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/teachability"}},o={},c=[{value:"ImageGenerator",id:"imagegenerator",level:2},{value:"generate_image",id:"generate_image",level:3},{value:"cache_key",id:"cache_key",level:3},{value:"DalleImageGenerator",id:"dalleimagegenerator",level:2},{value:"__init__",id:"__init__",level:3},{value:"ImageGeneration",id:"imagegeneration",level:2},{value:"__init__",id:"__init__-1",level:3},{value:"add_to_agent",id:"add_to_agent",level:3}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"imagegenerator",children:"ImageGenerator"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class ImageGenerator(Protocol)\n"})}),"\n",(0,i.jsx)(n.p,{children:"This class defines an interface for image generators."}),"\n",(0,i.jsxs)(n.p,{children:["Concrete implementations of this protocol must provide a ",(0,i.jsx)(n.code,{children:"generate_image"})," method that takes a string prompt as\ninput and returns a PIL Image object."]}),"\n",(0,i.jsx)(n.p,{children:"NOTE: Current implementation does not allow you to edit a previously existing image."}),"\n",(0,i.jsx)(n.h3,{id:"generate_image",children:"generate_image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def generate_image(prompt: str) -> Image\n"})}),"\n",(0,i.jsx)(n.p,{children:"Generates an image based on the provided prompt."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prompt"})," - A string describing the desired image."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"A PIL Image object representing the generated image."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ValueError"})," - If the image generation fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cache_key",children:"cache_key"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def cache_key(prompt: str) -> str\n"})}),"\n",(0,i.jsx)(n.p,{children:"Generates a unique cache key for the given prompt."}),"\n",(0,i.jsx)(n.p,{children:"This key can be used to store and retrieve generated images based on the prompt."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prompt"})," - A string describing the desired image."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"A unique string that can be used as a cache key."}),"\n",(0,i.jsx)(n.h2,{id:"dalleimagegenerator",children:"DalleImageGenerator"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class DalleImageGenerator()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Generates images using OpenAI's DALL-E models."}),"\n",(0,i.jsx)(n.p,{children:"This class provides a convenient interface for generating images based on textual prompts using OpenAI's DALL-E\nmodels. It allows you to specify the DALL-E model, resolution, quality, and the number of images to generate."}),"\n",(0,i.jsx)(n.p,{children:"Note: Current implementation does not allow you to edit a previously existing image."}),"\n",(0,i.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def __init__(llm_config: Dict,\n             resolution: Literal["256x256", "512x512", "1024x1024",\n                                 "1792x1024", "1024x1792"] = "1024x1024",\n             quality: Literal["standard", "hd"] = "standard",\n             num_images: int = 1)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"llm_config"})," ",(0,i.jsx)(n.em,{children:"dict"})," - llm config, must contain a valid dalle model and OpenAI API key in config_list."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"resolution"})," ",(0,i.jsx)(n.em,{children:"str"}),' - The resolution of the image you want to generate. Must be one of "256x256", "512x512", "1024x1024", "1792x1024", "1024x1792".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"quality"})," ",(0,i.jsx)(n.em,{children:"str"}),' - The quality of the image you want to generate. Must be one of "standard", "hd".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"num_images"})," ",(0,i.jsx)(n.em,{children:"int"})," - The number of images to generate."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"imagegeneration",children:"ImageGeneration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class ImageGeneration(AgentCapability)\n"})}),"\n",(0,i.jsx)(n.p,{children:"This capability allows a ConversableAgent to generate images based on the message received from other Agents."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Utilizes a TextAnalyzerAgent to analyze incoming messages to identify requests for image generation and\nextract relevant details."}),"\n",(0,i.jsx)(n.li,{children:"Leverages the provided ImageGenerator (e.g., DalleImageGenerator) to create the image."}),"\n",(0,i.jsx)(n.li,{children:"Optionally caches generated images for faster retrieval in future conversations."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"NOTE: This capability increases the token usage of the agent, as it uses TextAnalyzerAgent to analyze every\nmessage received by the agent."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'```python\nimport autogen\nfrom autogen.agentchat.contrib.capabilities.image_generation import ImageGeneration\n\n# Assuming you have llm configs configured for the LLMs you want to use and Dalle.\n# Create the agent\nagent = autogen.ConversableAgent(\n    name="dalle", llm_config={...}, max_consecutive_auto_reply=3, human_input_mode="NEVER"\n)\n\n# Create an ImageGenerator with desired settings\ndalle_gen = generate_images.DalleImageGenerator(llm_config={...})\n\n# Add the ImageGeneration capability to the agent\nagent.add_capability(ImageGeneration(image_generator=dalle_gen))\n```\n'})}),"\n",(0,i.jsx)(n.h3,{id:"__init__-1",children:"__init__"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def __init__(image_generator: ImageGenerator,\n             cache: Optional[AbstractCache] = None,\n             text_analyzer_llm_config: Optional[Dict] = None,\n             text_analyzer_instructions: str = PROMPT_INSTRUCTIONS,\n             verbosity: int = 0,\n             register_reply_position: int = 2)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"image_generator"})," ",(0,i.jsx)(n.em,{children:"ImageGenerator"})," - The image generator you would like to use to generate images."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cache"})," ",(0,i.jsx)(n.em,{children:"None or AbstractCache"})," - The cache client to use to store and retrieve generated images. If None,\nno caching will be used."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"text_analyzer_llm_config"})," ",(0,i.jsx)(n.em,{children:"Dict or None"})," - The LLM config for the text analyzer. If None, the LLM config will\nbe retrieved from the agent you're adding the ability to."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"text_analyzer_instructions"})," ",(0,i.jsx)(n.em,{children:"str"})," - Instructions provided to the TextAnalyzerAgent used to analyze\nincoming messages and extract the prompt for image generation. The default instructions focus on\nsummarizing the prompt. You can customize the instructions to achieve more granular control over prompt\nextraction."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Example"})," - 'Extract specific details from the message, like desired objects, styles, or backgrounds.'"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"verbosity"})," ",(0,i.jsx)(n.em,{children:"int"})," - The verbosity level. Defaults to 0 and must be greater than or equal to 0. The text\nanalyzer llm calls will be silent if verbosity is less than 2."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"register_reply_position"})," ",(0,i.jsx)(n.em,{children:"int"})," - The position of the reply function in the agent's list of reply functions.\nThis capability registers a new reply function to handle messages with image generation requests.\nDefaults to 2 to place it after the check termination and human reply for a ConversableAgent."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"add_to_agent",children:"add_to_agent"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def add_to_agent(agent: ConversableAgent)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Adds the Image Generation capability to the specified ConversableAgent."}),"\n",(0,i.jsx)(n.p,{children:"This function performs the following modifications to the agent:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Registers a reply function: A new reply function is registered with the agent to handle messages that\npotentially request image generation. This function analyzes the message and triggers image generation if\nnecessary."}),"\n",(0,i.jsx)(n.li,{children:"Creates an Agent (TextAnalyzerAgent): This is used to analyze messages for image generation requirements."}),"\n",(0,i.jsx)(n.li,{children:"Updates System Message: The agent's system message is updated to include a message indicating the\ncapability to generate images has been added."}),"\n",(0,i.jsx)(n.li,{children:"Updates Description: The agent's description is updated to reflect the addition of the Image Generation\ncapability. This might be helpful in certain use cases, like group chats."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"agent"})," ",(0,i.jsx)(n.em,{children:"ConversableAgent"})," - The ConversableAgent to add the capability to."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(67294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);