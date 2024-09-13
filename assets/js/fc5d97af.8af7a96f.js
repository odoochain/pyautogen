"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5509],{2401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(85893),s=t(11151);const a={custom_edit_url:"https://github.com/autogen-ai/autogen/edit/main/notebook/agentchat_memory_using_mem0.ipynb",description:"Use Mem0 to create agents with memory.",source_notebook:"/notebook/agentchat_memory_using_mem0.ipynb",tags:["memory"],title:"Agent with memory using Mem0"},r="Agent with memory using Mem0",i={id:"notebooks/agentchat_memory_using_mem0",title:"Agent with memory using Mem0",description:"Use Mem0 to create agents with memory.",source:"@site/docs/notebooks/agentchat_memory_using_mem0.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_memory_using_mem0",permalink:"/autogen/docs/notebooks/agentchat_memory_using_mem0",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/notebook/agentchat_memory_using_mem0.ipynb",tags:[{label:"memory",permalink:"/autogen/docs/tags/memory"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/autogen-ai/autogen/edit/main/notebook/agentchat_memory_using_mem0.ipynb",description:"Use Mem0 to create agents with memory.",source_notebook:"/notebook/agentchat_memory_using_mem0.ipynb",tags:["memory"],title:"Agent with memory using Mem0"},sidebar:"notebooksSidebar",previous:{title:"Runtime Logging with AutoGen",permalink:"/autogen/docs/notebooks/agentchat_logging"},next:{title:"Solving Multiple Tasks in a Sequence of Async Chats",permalink:"/autogen/docs/notebooks/agentchat_multi_task_async_chats"}},m={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Get API Keys",id:"get-api-keys",level:2},{value:"Initialize Agent and Memory",id:"initialize-agent-and-memory",level:2},{value:"Agent Inference",id:"agent-inference",level:2},{value:"Multi Agent Conversation",id:"multi-agent-conversation",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"agent-with-memory-using-mem0",children:"Agent with memory using Mem0"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/autogen-ai/autogen/blob/main/notebook/agentchat_memory_using_mem0.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/autogen-ai/autogen/blob/main/notebook/agentchat_memory_using_mem0.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsx)(n.p,{children:"This notebook demonstrates an intelligent customer service chatbot\nsystem that combines:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"AutoGen for conversational agents"}),"\n",(0,o.jsx)(n.li,{children:"Mem0 for memory management"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.mem0.ai/",children:"Mem0"})," provides a smart, self-improving memory\nlayer for Large Language Models (LLMs), enabling developers to create\npersonalized AI experiences that evolve with each user interaction.\nRefer ",(0,o.jsx)(n.a,{href:"https://docs.mem0.ai/overview",children:"docs"})," for more information."]}),"\n",(0,o.jsx)(n.p,{children:"Mem0 uses a hybrid database approach, combining vector, key-value, and\ngraph databases to efficiently store and retrieve different types of\ninformation. It associates memories with unique identifiers, extracts\nrelevant facts and preferences when storing, and uses a sophisticated\nretrieval process that considers relevance, importance, and recency."}),"\n",(0,o.jsx)(n.p,{children:"Key features of Mem0 include: 1. Comprehensive Memory Management: Easily\nmanage long-term, short-term, semantic, and episodic memories for\nindividual users, agents, and sessions through robust APIs. 2.\nSelf-Improving Memory: An adaptive system that continuously learns from\nuser interactions, refining its understanding over time. 3.\nCross-Platform Consistency: Ensures a unified user experience across\nvarious AI platforms and applications. 4. Centralized Memory Control:\nSimplifies storing, updating, and deleting memories."}),"\n",(0,o.jsx)(n.p,{children:"This approach allows for maintaining context across sessions, adaptive\npersonalization, and dynamic updates, making it more powerful than\ntraditional Retrieval-Augmented Generation (RAG) approaches for creating\ncontext-aware AI applications."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"The implementation showcases how to initialize agents, manage\nconversation memory, and facilitate multi-agent conversations for\nenhanced problem-solving in customer support scenarios."})}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.admonition,{title:"Requirements",type:"info",children:[(0,o.jsx)(n.p,{children:"Some extra dependencies are needed for this notebook, which can be installed via pip:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip install autogen mem0ai\n"})}),(0,o.jsxs)(n.p,{children:["For more information, please refer to the ",(0,o.jsx)(n.a,{href:"/docs/installation/",children:"installation guide"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"get-api-keys",children:"Get API Keys"}),"\n",(0,o.jsxs)(n.p,{children:["Please get ",(0,o.jsx)(n.code,{children:"MEM0_API_KEY"})," from ",(0,o.jsx)(n.a,{href:"https://app.mem0.ai/",children:"Mem0 Platform"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\n\nfrom mem0 import MemoryClient\n\nfrom autogen import ConversableAgent\n\nos.environ["OPENAI_API_KEY"] = "your_api_key"\nos.environ["MEM0_API_KEY"] = "your_api_key"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"initialize-agent-and-memory",children:"Initialize Agent and Memory"}),"\n",(0,o.jsx)(n.p,{children:"The conversational agent is set up using the \u2018gpt-4o\u2019 model and a mem0\nclient. We\u2019ll utilize the client\u2019s methods for storing and accessing\nmemories."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'agent = ConversableAgent(\n    "chatbot",\n    llm_config={"config_list": [{"model": "gpt-4o", "api_key": os.environ.get("OPENAI_API_KEY")}]},\n    code_execution_config=False,\n    function_map=None,\n    human_input_mode="NEVER",\n)\n\nmemory = MemoryClient()\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Initialize a conversation history for a Best Buy customer service\nchatbot. It contains a list of message exchanges between the user and\nthe assistant, structured as dictionaries with \u2018role\u2019 and \u2018content\u2019\nkeys. The entire conversation is then stored in memory using the\n",(0,o.jsx)(n.code,{children:"memory.add()"})," method, associated with the identifier\n\u201ccustomer_service_bot\u201d."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'conversation = [\n    {\n        "role": "assistant",\n        "content": "Hi, I\'m Best Buy\'s chatbot!\\n\\nThanks for being a My Best Buy TotalTM member.\\n\\nWhat can I help you with?",\n    },\n    {\n        "role": "user",\n        "content": \'Seeing horizontal lines on our tv. TV model: Sony - 77" Class BRAVIA XR A80K OLED 4K UHD Smart Google TV\',\n    },\n    {\n        "role": "assistant",\n        "content": "Thanks for being a My Best Buy Total\u2122 member. I can connect you to an expert immediately - just one perk of your membership!\\n\\nSelect the button below when you\'re ready to chat.",\n    },\n    {\n        "role": "assistant",\n        "content": "Good evening, thank you for choosing Best Buy, Fnu. My name is Lovely. I hope you are doing well. I\'m sorry to hear that you\'re seeing horizontal lines on your TV.\\n\\nI\'m absolutely committed to exploring all possible ways to assist you to fix this issue.\\n\\nTo ensure that we are on the right account, may I please have your email address registered with your Best Buy account?",\n    },\n    {"role": "user", "content": "dd@gmail.com"},\n    {\n        "role": "assistant",\n        "content": "Perfect! Thank you for providing all the details, surely you have made my job easier by doing this. I really appreciate it.\\n\\nI also want to take a moment to express our heartfelt appreciation for your trust and loyalty. Thank you for being an amazing customer of BestBuy Total.\\n\\nCould you please help me with the order number or product\'s details to check it quickly?\\n\\nSamsung - 49\\" Odyssey OLED G9 (G95SC) DQHD 240Hz 0.03ms G-Sync Compatible Curved Smart Gaming Monitor - Silver - just to confirm this is the item, right?",\n    },\n    {"role": "user", "content": "Order number: 112217629"},\n    {\n        "role": "assistant",\n        "content": "Superb! Thank you for confirmation.\\n\\nThank you for your patience. After exploring all possible solutions, I can help you to arrange a home repair appointment for your device. Our Geek Squad experts will visit your home to inspect and fix your device.\\n\\nIt\'s great that you have a protection plan - rest assured, we\'ve got your back! As a valued Total member, you can avail this service at a minimal service fee. This fee, applicable to all repairs, covers the cost of diagnosing the issue and any small parts needed for the repair. It\'s part of our 24-month free protection plan.\\n\\nPlease click here to review the service fee and plan coverage details -\\n\\nhttps://www.bestbuy.com/site/best-buy-membership/best-buy-protection/pcmcat1608643232014.c?id=pcmcat1608643232014#jl-servicefees\\n\\nFnu - just to confirm shall I proceed to schedule the appointment?",\n    },\n    {"role": "user", "content": "Yes please"},\n    {"role": "assistant", "content": "When should I schedule the appointment?"},\n    {"role": "user", "content": "Schedule it for tomorrow please"},\n]\n\nmemory.add(messages=conversation, user_id="customer_service_bot")\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"{'message': 'ok'}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"agent-inference",children:"Agent Inference"}),"\n",(0,o.jsx)(n.p,{children:"We ask a question to the agent, utilizing mem0 to retrieve relevant\nmemories. The agent then formulates a response based on both the\nquestion and the retrieved contextual information."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'data = "I forgot the order numnber, can you quickly tell me?"\n\nrelevant_memories = memory.search(data, user_id="customer_service_bot")\nflatten_relevant_memories = "\\n".join([m["memory"] for m in relevant_memories])\n\nprompt = f"""Answer the user question considering the memories. Keep answers clear and concise.\nMemories:\n{flatten_relevant_memories}\n\\n\\n\nQuestion: {data}\n"""\n\nreply = agent.generate_reply(messages=[{"content": prompt, "role": "user"}])\nprint(reply)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Sure, your order number is 112217629.\n"})}),"\n",(0,o.jsx)(n.h2,{id:"multi-agent-conversation",children:"Multi Agent Conversation"}),"\n",(0,o.jsx)(n.p,{children:"Initialize two AI agents: a \u201cmanager\u201d for resolving customer issues and\na \u201ccustomer_bot\u201d for gathering information on customer problems, both\nusing GPT-4. It then retrieves relevant memories for a given question,\ncombining them with the question into a prompt. This prompt can be used\nby either the manager or customer_bot to generate a contextually\ninformed response."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'manager = ConversableAgent(\n    "manager",\n    system_message="You are a manager who helps in resolving customer issues.",\n    llm_config={"config_list": [{"model": "gpt-4", "temperature": 0, "api_key": os.environ.get("OPENAI_API_KEY")}]},\n    human_input_mode="NEVER",\n)\n\ncustomer_bot = ConversableAgent(\n    "customer_bot",\n    system_message="You are a customer service bot who gathers information on issues customers are facing. Keep answers clear and concise.",\n    llm_config={"config_list": [{"model": "gpt-4", "temperature": 0, "api_key": os.environ.get("OPENAI_API_KEY")}]},\n    human_input_mode="NEVER",\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'data = "When is the appointment?"\n\nrelevant_memories = memory.search(data, user_id="customer_service_bot")\nflatten_relevant_memories = "\\n".join([m["memory"] for m in relevant_memories])\n\nprompt = f"""\nContext:\n{flatten_relevant_memories}\n\\n\\n\nQuestion: {data}\n"""\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"result = manager.send(prompt, customer_bot, request_reply=True)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"manager (to customer_bot):\n\n\nContext:\nScheduled an appointment for a home repair for tomorrow\nOrder number is 112217629\nTV model is Sony - 77\" Class BRAVIA XR A80K OLED 4K UHD Smart Google TV\nUser's email address is dd@gmail.com\n\n\n\nQuestion: When is the appointment?\n\n\n--------------------------------------------------------------------------------\ncustomer_bot (to manager):\n\nThe appointment is scheduled for tomorrow.\n\n--------------------------------------------------------------------------------\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var o=t(67294);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);