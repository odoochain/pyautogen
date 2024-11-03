"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5754],{37393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(85893),i=t(11151);const s={title:"AutoGen's Teachable Agents",authors:"rickyloynd-microsoft",tags:["LLM","teach"]},o=void 0,r={permalink:"/autogen/blog/2023/10/26/TeachableAgent",source:"@site/blog/2023-10-26-TeachableAgent/index.mdx",title:"AutoGen's Teachable Agents",description:"Teachable Agent Architecture",date:"2023-10-26T00:00:00.000Z",formattedDate:"October 26, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"teach",permalink:"/autogen/blog/tags/teach"}],readingTime:16.82,hasTruncateMarker:!1,authors:[{name:"Ricky Loynd",title:"Senior Research Engineer at Microsoft",url:"https://github.com/rickyloynd-microsoft",imageURL:"https://github.com/rickyloynd-microsoft.png",key:"rickyloynd-microsoft"}],frontMatter:{title:"AutoGen's Teachable Agents",authors:"rickyloynd-microsoft",tags:["LLM","teach"]},unlisted:!1,prevItem:{title:"Multimodal with GPT-4V and LLaVA",permalink:"/autogen/blog/2023/11/06/LMM-Agent"},nextItem:{title:"Retrieval-Augmented Generation (RAG) Applications with AutoGen",permalink:"/autogen/blog/2023/10/18/RetrieveChat"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Run It Yourself",id:"run-it-yourself",level:2},{value:"Basic Usage of Teachability",id:"basic-usage-of-teachability",level:2},{value:"Example 1 - Learning user info",id:"example-1---learning-user-info",level:2},{value:"Example 2 - Learning new facts",id:"example-2---learning-new-facts",level:2},{value:"Example 3 - Learning user preferences",id:"example-3---learning-user-preferences",level:2},{value:"Example 4 - Learning new skills",id:"example-4---learning-new-skills",level:2},{value:"Planned improvements",id:"planned-improvements",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Teachable Agent Architecture",src:t(22659).Z+"",width:"1428",height:"686"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"TL;DR:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["We introduce ",(0,a.jsx)(n.strong,{children:"Teachable Agents"})," so that users can teach their LLM-based assistants new facts, preferences, and skills."]}),"\n",(0,a.jsx)(n.li,{children:"We showcase examples of teachable agents learning and later recalling facts, preferences, and skills in subsequent chats."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"Conversational assistants based on LLMs can remember the current chat with the user, and can also demonstrate in-context learning of user teachings during the conversation. But the assistant's memories and learnings are lost once the chat is over, or when a single chat grows too long for the LLM to handle effectively. Then in subsequent chats the user is forced to repeat any necessary instructions over and over."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Teachability"})," addresses these limitations by persisting user teachings across chat boundaries in long-term memory implemented as a vector database. Instead of copying all of memory into the context window, which would eat up valuable space, individual memories (called memos) are retrieved into context as needed. This allows the user to teach frequently used facts and skills to the teachable agent just once, and have it recall them in later chats."]}),"\n",(0,a.jsxs)(n.p,{children:["Any instantiated ",(0,a.jsx)(n.code,{children:"agent"})," that inherits from ",(0,a.jsx)(n.code,{children:"ConversableAgent"})," can be made teachable by instantiating a ",(0,a.jsx)(n.code,{children:"Teachability"})," object and calling its ",(0,a.jsx)(n.code,{children:"add_to_agent(agent)"})," method.\nIn order to make effective decisions about memo storage and retrieval, the ",(0,a.jsx)(n.code,{children:"Teachability"})," object calls an instance of ",(0,a.jsx)(n.code,{children:"TextAnalyzerAgent"})," (another AutoGen agent) to identify and reformulate text as needed for remembering facts, preferences, and skills. Note that this adds extra LLM calls involving a relatively small number of tokens, which can add a few seconds to the time a user waits for each response."]}),"\n",(0,a.jsx)(n.h2,{id:"run-it-yourself",children:"Run It Yourself"}),"\n",(0,a.jsxs)(n.p,{children:["AutoGen contains four code examples that use ",(0,a.jsx)(n.code,{children:"Teachability"}),"."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/test/agentchat/contrib/capabilities/chat_with_teachable_agent.py",children:"chat_with_teachable_agent.py"})," to converse with a teachable agent."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/test/agentchat/contrib/capabilities/test_teachable_agent.py",children:"test_teachable_agent.py"})," for quick unit testing of a teachable agent."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use the Jupyter notebook ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_teachability.ipynb",children:"agentchat_teachability.ipynb"})," to step through examples discussed below."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use the Jupyter notebook ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_teachable_oai_assistants.ipynb",children:"agentchat_teachable_oai_assistants.ipynb"})," to make arbitrary OpenAI Assistants teachable through ",(0,a.jsx)(n.code,{children:"GPTAssistantAgent"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"basic-usage-of-teachability",children:"Basic Usage of Teachability"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Install dependencies"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Please install autogen with the [teachable] option before using ",(0,a.jsx)(n.code,{children:"Teachability"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[teachable]"\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Import agents"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from autogen import UserProxyAgent, config_list_from_json\nfrom autogen.agentchat.contrib.capabilities.teachability import Teachability\nfrom autogen import ConversableAgent  # As an example\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Create llm_config"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Load LLM inference endpoints from an env variable or a file\n# See https://autogenhub.github.io/autogen/docs/FAQ#set-your-api-endpoints\n# and OAI_CONFIG_LIST_sample\nfilter_dict = {"model": ["gpt-4"]}  # GPT-3.5 is less reliable than GPT-4 at learning from user feedback.\nconfig_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST", filter_dict=filter_dict)\nllm_config={"config_list": config_list, "timeout": 120}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Create the agents"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'\n# Start by instantiating any agent that inherits from ConversableAgent, which we use directly here for simplicity.\nteachable_agent = ConversableAgent(\n    name="teachable_agent",  # The name can be anything.\n    llm_config=llm_config\n)\n\n# Instantiate a Teachability object. Its parameters are all optional.\nteachability = Teachability(\n    reset_db=False,  # Use True to force-reset the memo DB, and False to use an existing DB.\n    path_to_db_dir="./tmp/interactive/teachability_db"  # Can be any path, but teachable agents in a group chat require unique paths.\n)\n\n# Now add teachability to the agent.\nteachability.add_to_agent(teachable_agent)\n\n# For this test, create a user proxy agent as usual.\nuser = UserProxyAgent("user", human_input_mode="ALWAYS")\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Chat with the teachable agent"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# This function will return once the user types 'exit'.\nteachable_agent.initiate_chat(user, message=\"Hi, I'm a teachable user assistant! What's on your mind?\")\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-1---learning-user-info",children:"Example 1 - Learning user info"}),"\n",(0,a.jsx)(n.p,{children:"A user can teach the agent facts about themselves.\n(Note that due to their finetuning, LLMs can be reluctant to admit that they know personal information.)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Loading previous memory (if any) from disk.\nteachable_agent (to user):\n\nGreetings, I'm a teachable user assistant! What's on your mind today?\n\n--------------------------------------------------------------------------------\nProvide feedback to teachable_agent. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: My name is Ricky\nuser (to teachable_agent):\n\nMy name is Ricky\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nteachable_agent (to user):\n\nHello Ricky! How can I assist you today?\n\n--------------------------------------------------------------------------------\nProvide feedback to teachable_agent. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: exit\n"})}),"\n",(0,a.jsx)(n.p,{children:"In a later conversation, the user can check whether the teachable agent remembers their name. (For readability, the user prompts and some logged notices are not repeated below.)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nwhat's my name?\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\nHi Ricky! How can I help you today?\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-2---learning-new-facts",children:"Example 2 - Learning new facts"}),"\n",(0,a.jsx)(n.p,{children:"A user can teach the agent more complex, related facts."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nWhat is the Vicuna model?\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\nI'm sorry, but I don't have information about the \"Vicuna model\" in my current database. Could you please provide some context, description, or details about this model so I can better assist you?\n\n--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nVicuna is a 13B-parameter language model released by Meta.\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\nThank you for providing the information. The Vicuna model is a large-scale language model developed by Meta. It consists of 13 billion parameters, which is what makes it able to understand and generate human-like text across various topics. Parameters in a neural network are the weights and biases assigned to each connection between the neurons, and having more parameters enables the model to learn and capture more complex patterns and relationships in data. As an AI language model, Vicuna can be utilized in various language-related tasks, such as text completion, translation, summarization, and more.\n\n--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nWhat is the Orca model?\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\nThe Orca model is a yet-to-be-released language model by Meta, referring to the Research Preview API release of Meta's advanced language model. While I don't have specific details about the Orca model at this time, it is expected that the model would have an even larger number of parameters to further enhance its capabilities compared to its predecessor, Vicuna.\n\nAs AI language models evolve, they generally become more efficient at understanding and generating human-like text. This makes them more effective in completing a wide range of tasks, including text completion, translation, summarization, and Q&A, as well as providing more accurate and coherent results in various applications.\n\n--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nOrca is a 13B-parameter language model released by Microsoft. It outperforms Vicuna on most tasks.\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\nThank you for the clarification. Orca is a 13-billion-parameter language model developed by Microsoft. It is designed to outperform Vicuna, the language model released by Meta. With a large number of parameters, Orca is capable of understanding and generating human-like text across diverse subjects, making it highly useful in various applications.\n\nOrca's advanced capabilities allow it to excel in tasks such as text completion, translation, summarization, Q&A, and more. Its performance improvement over Vicuna highlights the rapid advancements in natural language processing (NLP) research and the development of increasingly capable AI language models.\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then in a later chat the teachable agent can answer questions about the facts it has been taught.\n(Remember to first close the previous chat by typing 'exit'.)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nHow does the Vicuna model compare to the Orca model?\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\nThe Vicuna and Orca models are both 13B-parameter language models released by Meta and Microsoft, respectively. In terms of performance, Orca has been reported to outperform Vicuna on most tasks. However, without detailed information about specific tasks and benchmarks, it is difficult to provide a more comprehensive comparison. Generally speaking, both models are advanced language models that aim to provide high-quality natural language understanding and generation, but Orca appears to have an edge in terms of overall performance.\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-3---learning-user-preferences",children:"Example 3 - Learning user preferences"}),"\n",(0,a.jsx)(n.p,{children:"A user can teach the agent how they prefer to have things done."}),"\n",(0,a.jsx)(n.p,{children:"Be aware that a message like the next one cannot be entered as a single message through a command line because it contains a newline character.\nSuch messages can be entered in a Jupyter notebook, or through some UI layer like that of ChatGPT."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nPlease summarize this abstract.\n\nAutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation\nQingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang, Shaokun Zhang, Jiale Liu, Ahmed Hassan Awadallah, Ryen W White, Doug Burger, Chi Wang\nAutoGen is an open-source framework that allows developers to build LLM applications via multiple agents that can converse with each other to accomplish tasks. AutoGen agents are customizable, conversable, and can operate in various modes that employ combinations of LLMs, human inputs, and tools. Using AutoGen, developers can also flexibly define agent interaction behaviors. Both natural language and computer code can be used to program flexible conversation patterns for different applications. AutoGen serves as a generic infrastructure to build diverse applications of various complexities and LLM capacities. Empirical studies demonstrate the effectiveness of the framework in many example applications, with domains ranging from mathematics, coding, question answering, operations research, online decision-making, entertainment, etc.\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\nAutoGen is an open-source framework designed to enable developers to create LLM applications with multiple customizable agents that can converse with each other to complete tasks. These agents can operate using different combinations of LLMs, human inputs, and tools, allowing developers to define agent interaction behaviors flexibly. AutoGen supports programming flexible conversation patterns using both natural language and code, making it suitable for building diverse applications with varying complexities and LLM capacities. Its effectiveness has been demonstrated through empirical studies across various domains including mathematics, coding, operations research, decision-making, and entertainment.\n\n--------------------------------------------------------------------------------\nPlease summarize this abstract. When I'm summarizing an abstract, I try to make the summary contain just three short bullet points:  the title, the innovation, and the key empirical results.\n\nAutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation\nQingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang, Shaokun Zhang, Jiale Liu, Ahmed Hassan Awadallah, Ryen W White, Doug Burger, Chi Wang\nAutoGen is an open-source framework that allows developers to build LLM applications via multiple agents that can converse with each other to accomplish tasks. AutoGen agents are customizable, conversable, and can operate in various modes that employ combinations of LLMs, human inputs, and tools. Using AutoGen, developers can also flexibly define agent interaction behaviors. Both natural language and computer code can be used to program flexible conversation patterns for different applications. AutoGen serves as a generic infrastructure to build diverse applications of various complexities and LLM capacities. Empirical studies demonstrate the effectiveness of the framework in many example applications, with domains ranging from mathematics, coding, question answering, operations research, online decision-making, entertainment, etc.\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\n- Title: AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation\n- Innovation: Open-source framework for creating customizable LLM applications through agent conversations, supporting various modes and interaction behaviors.\n- Key Empirical Results: Demonstrated effectiveness across diverse application domains, including mathematics, coding, question answering, and more.\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then in later chats the teacher doesn't need to reiterate their detailed preferences."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nPlease summarize this abstract.\n\nSparks of Artificial General Intelligence: Early experiments with GPT-4\nS\xe9bastien Bubeck, Varun Chandrasekaran, Ronen Eldan, Johannes Gehrke, Eric Horvitz, Ece Kamar, Peter Lee, Yin Tat Lee, Yuanzhi Li, Scott Lundberg, Harsha Nori, Hamid Palangi, Marco Tulio Ribeiro, Yi Zhang\nArtificial intelligence (AI) researchers have been developing and refining large language models (LLMs) that exhibit remarkable capabilities across a variety of domains and tasks, challenging our understanding of learning and cognition. The latest model developed by OpenAI, GPT-4, was trained using an unprecedented scale of compute and data. In this paper, we report on our investigation of an early version of GPT-4, when it was still in active development by OpenAI. We contend that (this early version of) GPT-4 is part of a new cohort of LLMs (along with ChatGPT and Google's PaLM for example) that exhibit more general intelligence than previous AI models. We discuss the rising capabilities and implications of these models. We demonstrate that, beyond its mastery of language, GPT-4 can solve novel and difficult tasks that span mathematics, coding, vision, medicine, law, psychology and more, without needing any special prompting. Moreover, in all of these tasks, GPT-4's performance is strikingly close to human-level performance, and often vastly surpasses prior models such as ChatGPT. Given the breadth and depth of GPT-4's capabilities, we believe that it could reasonably be viewed as an early (yet still incomplete) version of an artificial general intelligence (AGI) system. In our exploration of GPT-4, we put special emphasis on discovering its limitations, and we discuss the challenges ahead for advancing towards deeper and more comprehensive versions of AGI, including the possible need for pursuing a new paradigm that moves beyond next-word prediction. We conclude with reflections on societal influences of the recent technological leap and future research directions.\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\n- Title: Sparks of Artificial General Intelligence: Early experiments with GPT-4\n- Innovation: GPT-4, an LLM with remarkable capabilities, demonstrates human-level performance across various domains, like math, coding, vision, medicine, law, and psychology.\n- Key results: GPT-4 significantly surpasses prior models, suggesting it may be an early version of AGI; limitations and challenges toward deeper AGI are also discussed.\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-4---learning-new-skills",children:"Example 4 - Learning new skills"}),"\n",(0,a.jsx)(n.p,{children:"Users can extend the teachable agent's capabilities by teaching it new skills for accomplishing challenging tasks. It usually works best to first describe the task, then (in the same turn) provide a hint or advice for approaching the task."}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2303.12712",children:"Sparks of AGI"})," paper evaluated GPT-4 on math problems like the following, which it could only solve 32% of the time. We first show a failure case, then teach the agent a strategy which lifts GPT-4's success rate above 95%."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nConsider the identity:\n9 * 4 + 6 * 6 = 72\nCan you modify exactly one integer (and not more than that!) on the left hand side of the equation so the right hand side becomes 99?\n-Let\'s think step-by-step, write down a plan, and then write down your solution as: "The solution is: A * B + C * D".\n\n--------------------------------------------------------------------------------\nStep 1: Identify the current equation and the target value on the right-hand side.\nCurrent equation: 9 * 4 + 6 * 6 = 72\nTarget value: 99\n\nStep 2: Determine what numbers can be changed on the left-hand side.\nPossible changes: 9, 4, 6 (first occurrence), and 6 (second occurrence)\n\nStep 3: Evaluate whether each change in the numbers on the left-hand side can result in the target value.\n9 -> If changed, it would create a larger product.\n4 -> If changed, the product would increase or decrease by more than the amount needed to reach 99.\n6 (first occurrence) -> If increased to 7, then the equation would be 9 * 4 + 7 * 6 = 94, which is still not 99.\n6 (second occurrence) -> If increased to 7, then the equation would be 9 * 4 + 6 * 7 = 99.\n\nStep 4: Write down the solution.\nThe solution is: 9 * 4 + 6 * 7\n\n--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nConsider the identity:\n9 * 4 + 6 * 6 = 72\nCan you modify exactly one integer (and not more than that!) on the left hand side of the equation so the right hand side becomes 99?\n-Let\'s think step-by-step, write down a plan, and then write down your solution as: "The solution is: A * B + C * D".\n\nHere\'s some advice that may help:\n1. Let E denote the original number on the right.\n2. Let F denote the final number on the right.\n3. Calculate the difference between the two, G = F - E.\n4. Examine the numbers on the left one by one until finding one that divides evenly into G, where negative integers are allowed.\n5. Calculate J = G / H. This is the number of times that H divides into G.\n6. Verify that J is an integer, and that H * J = G.\n7. Find the number on the left which is multiplied by H, and call it K.\n8. Change K to K + J.\n9. Recompute the value on the left, and verify that it equals F.\nFinally, write down your solution as: "The solution is: A * B + C * D".\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\nStep 1: Identify the original number (E) and the final number (F) on the right-hand side.\nE = 72\nF = 99\n\nStep 2: Calculate the difference between the two, G = F - E.\nG = 99 - 72 = 27\n\nStep 3: Examine the numbers on the left one by one until finding one that divides evenly into G, where negative integers are allowed.\n9 (divides evenly into 27)\n4 (does not)\n6 (first occurrence, does not)\n6 (second occurrence, does not)\n\nStep 4: Calculate J = G / H. This is the number of times that H divides into G.\nH = 9 (since 9 divides evenly into 27)\nJ = 27 / 9 = 3\n\nStep 5: Verify that J is an integer, and that H * J = G.\nH * J = 9 * 3 = 27\nJ = 3 (which is an integer)\n\nStep 6: Find the number on the left which is multiplied by H, and call it K.\nNumber on the leftside of the equation that is multiplied by 9: 4\nTherefore, K = 4\n\nStep 7: Change K to K + J.\nK + J = 4 + 3 = 7\n\nStep 8: Recompute the value on the left, and verify that it equals F.\n9 * 7 + 6 * 6 = 63 + 36 = 99 (which is equal to F)\n\nStep 9: Write down the solution.\nThe solution is: 9 * 7 + 6 * 6\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,a.jsx)(n.p,{children:"In a later chat the user doesn't need to repeat the detailed advice."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"--------------------------------------------------------------------------------\nuser (to teachable_agent):\n\nConsider the identity:\n8 * 3 + 7 * 9 = 87\nCan you modify exactly one integer (and not more than that!) on the left hand side of the equation so the right hand side becomes 59?\n-Let's think step-by-step, write down a plan, and then write down your solution as: \"The solution is: A * B + C * D\".\n\n--------------------------------------------------------------------------------\nteachable_agent (to user):\n\nLet's follow the advice to modify one integer on the left hand side of the equation to make the right hand side become 59:\n\n1. Let E denote the original number on the right: E = 87.\n2. Let F denote the final number on the right: F = 59.\n3. Calculate the difference between the two, G = F - E: G = 59 - 87 = -28.\n4. Examine the numbers on the left one by one to find one that divides evenly into G: 8, 3, 7, 9. Since 7 divides -28 evenly, we will work with 7 (H = 7).\n5. Calculate J = G / H: J = -28 / 7 = -4.\n6. Verify that J is an integer, and that H * J = G: J is an integer, and 7 * (-4) = -28.\n7. Find the number on the left which is multiplied by H (7), and call it K: K = 9.\n8. Change K to K + J: K_new = 9 + (-4) = 5.\n9. Recompute the value on the left, and verify that it equals F: (8 * 3) + (7 * 5) = 24 + 35 = 59.\n\nThe solution is: 8 * 3 + 7 * 5\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.h2,{id:"planned-improvements",children:"Planned improvements"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Understanding user instructions distributed over multiple turns."}),"\n",(0,a.jsx)(n.li,{children:"Learning from the agent's own experience, to reduce dependence on explicit user teachings."}),"\n",(0,a.jsx)(n.li,{children:"Learning skills built on top of previously learned skills."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Teachability"})," is still under active research and development. For any problems you find or improvements you have in mind, please join our discussions in this repo and on our ",(0,a.jsx)(n.a,{href:"https://aka.ms/autogen-dc",children:"Discord channel"}),". We look forward to seeing how you and the rest of the community can use and improve teachable agents in AutoGen!"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},22659:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/teachable-arch-2d85f7f511a1677c5d5fb19af7ab91ad.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(67294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);