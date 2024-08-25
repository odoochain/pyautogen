"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6599],{91749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,quartoRawHtml:()=>d,toc:()=>c});var o=t(85893),a=t(11151);const s={custom_edit_url:"https://github.com/autogen-ai/autogen/edit/main/notebook/agentchat_databricks_dbrx.ipynb",description:"Use Databricks DBRX and Foundation Model APIs to build AutoGen applications backed by open-source LLMs.",source_notebook:"/notebook/agentchat_databricks_dbrx.ipynb",tags:["code generation","dbrx","databricks","open source","lakehouse","custom model","data intelligence"],title:"Use AutoGen in Databricks with DBRX"},i="Use AutoGen in Databricks with DBRX",r={id:"notebooks/agentchat_databricks_dbrx",title:"Use AutoGen in Databricks with DBRX",description:"Use Databricks DBRX and Foundation Model APIs to build AutoGen applications backed by open-source LLMs.",source:"@site/docs/notebooks/agentchat_databricks_dbrx.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_databricks_dbrx",permalink:"/autogen/docs/notebooks/agentchat_databricks_dbrx",draft:!1,unlisted:!1,editUrl:"https://github.com/autogen-ai/autogen/edit/main/notebook/agentchat_databricks_dbrx.ipynb",tags:[{label:"code generation",permalink:"/autogen/docs/tags/code-generation"},{label:"dbrx",permalink:"/autogen/docs/tags/dbrx"},{label:"databricks",permalink:"/autogen/docs/tags/databricks"},{label:"open source",permalink:"/autogen/docs/tags/open-source"},{label:"lakehouse",permalink:"/autogen/docs/tags/lakehouse"},{label:"custom model",permalink:"/autogen/docs/tags/custom-model"},{label:"data intelligence",permalink:"/autogen/docs/tags/data-intelligence"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/autogen-ai/autogen/edit/main/notebook/agentchat_databricks_dbrx.ipynb",description:"Use Databricks DBRX and Foundation Model APIs to build AutoGen applications backed by open-source LLMs.",source_notebook:"/notebook/agentchat_databricks_dbrx.ipynb",tags:["code generation","dbrx","databricks","open source","lakehouse","custom model","data intelligence"],title:"Use AutoGen in Databricks with DBRX"},sidebar:"notebooksSidebar",previous:{title:"Agent Chat with Multimodal Models: DALLE  and GPT-4V",permalink:"/autogen/docs/notebooks/agentchat_dalle_and_gpt4v"},next:{title:"Task Solving with Provided Tools as Functions (Asynchronous Function Calls)",permalink:"/autogen/docs/notebooks/agentchat_function_call_async"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Tips",id:"tips",level:2},{value:"Contributor",id:"contributor",level:2},{value:"Setup DBRX config list",id:"setup-dbrx-config-list",level:2},{value:"Hello World Example",id:"hello-world-example",level:2},{value:"Simple Coding Agent",id:"simple-coding-agent",level:2},{value:"Conversable Bots",id:"conversable-bots",level:2},{value:"Implement Logging Display",id:"implement-logging-display",level:2},{value:"Closing Thoughts",id:"closing-thoughts",level:2},{value:"Limitations",id:"limitations",level:3}],d=["",""];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"use-autogen-in-databricks-with-dbrx",children:"Use AutoGen in Databricks with DBRX"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/autogen-ai/autogen/blob/main/notebook/agentchat_databricks_dbrx.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/autogen-ai/autogen/blob/main/notebook/agentchat_databricks_dbrx.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n","\n",(0,o.jsxs)("figure",{children:[(0,o.jsx)("img",{src:"https://www.databricks.com/en-blog-assets/static/2fe1a0af1ee0f6605024a810b604079c/dbrx-blog-header-optimized.png",alt:"DBRX launch"}),(0,o.jsx)("figcaption",{"aria-hidden":"true",children:"DBRX launch"})]}),"\n",(0,o.jsxs)(n.p,{children:["In March 2024, Databricks released\n",(0,o.jsx)(n.a,{href:"https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm",children:"DBRX"}),",\na general-purpose LLM that sets a new standard for open LLMs. While\navailable as an open-source model on Hugging Face\n(",(0,o.jsx)(n.a,{href:"https://huggingface.co/databricks/dbrx-instruct/tree/main",children:"databricks/dbrx-instruct"}),"\nand ",(0,o.jsx)(n.a,{href:"https://huggingface.co/databricks/dbrx-base",children:"databricks/dbrx-base"}),"\n), customers of Databricks can also tap into the ",(0,o.jsx)(n.a,{href:"https://docs.databricks.com/en/machine-learning/model-serving/score-foundation-models.html#query-a-chat-completion-model",children:"Foundation Model\nAPIs"}),",\nwhich make DBRX available through an OpenAI-compatible, autoscaling REST\nAPI."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/Use-Cases/agent_chat",children:"Autogen"}),"\nis becoming a popular standard for agent creation. Built to support any\n\u201cLLM as a service\u201d that implements the OpenAI SDK, it can easily be\nextended to integrate with powerful open source models."]}),"\n",(0,o.jsxs)(n.p,{children:["This notebook will demonstrate a few basic examples of Autogen with\nDBRX, including the use of ",(0,o.jsx)(n.code,{children:"AssistantAgent"}),", ",(0,o.jsx)(n.code,{children:"UserProxyAgent"}),", and\n",(0,o.jsx)(n.code,{children:"ConversableAgent"}),". These demos are not intended to be exhaustive - feel\nfree to use them as a base to build upon!"]}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.p,{children:["AutoGen must be installed on your Databricks cluster, and requires\n",(0,o.jsx)(n.code,{children:"Python>=3.8"}),". This example includes the ",(0,o.jsx)(n.code,{children:"%pip"})," magic command to\ninstall: ",(0,o.jsx)(n.code,{children:"%pip install pyautogen"}),", as well as other necessary libraries."]}),"\n",(0,o.jsxs)(n.p,{children:["This code has been tested on: * ",(0,o.jsx)(n.a,{href:"https://docs.databricks.com/en/compute/serverless.html",children:"Serverless\nNotebooks"})," (in\npublic preview as of Apr 18, 2024) * Databricks Runtime 14.3 LTS ML\n",(0,o.jsx)(n.a,{href:"https://docs.databricks.com/en/release-notes/runtime/14.3lts-ml.html",children:"docs"})]}),"\n",(0,o.jsxs)(n.p,{children:["This code can run in any Databricks workspace in a region where DBRX is\navailable via pay-per-token APIs (or provisioned throughput). To check\nif your region is supported, see ",(0,o.jsx)(n.a,{href:"https://docs.databricks.com/en/machine-learning/model-serving/model-serving-limits.html#foundation-model-apis-limits",children:"Foundation Model Region\nAvailability"}),".\nIf the above is true, the workspace must also be enabled by an admin for\nFoundation Model APIs\n",(0,o.jsx)(n.a,{href:"https://docs.databricks.com/en/machine-learning/foundation-models/index.html#requirements",children:"docs"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["This notebook can be imported from github to a Databricks workspace\nand run directly. Use ",(0,o.jsx)(n.a,{href:"https://www.databricks.com/blog/2023/01/26/work-large-monorepos-sparse-checkout-support-databricks-repos.html",children:"sparse checkout mode with\ngit"}),"\nto import only this notebook or the examples directory."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Databricks recommends using\n",(0,o.jsx)(n.a,{href:"https://docs.databricks.com/en/security/secrets/secrets.html",children:"Secrets"}),"\ninstead of storing tokens in plain text."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"contributor",children:"Contributor"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"mailto:tj@databricks.com",children:"tj@databricks.com"})," (Github: tj-cycyota)"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"%pip install pyautogen==0.2.25 openai==1.21.2 typing_extensions==4.11.0 --upgrade\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text"})}),"\n",(0,o.jsx)(n.p,{children:"It is recommended to restart the Python kernel after installs -\nuncomment and run the below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# dbutils.library.restartPython()\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setup-dbrx-config-list",children:"Setup DBRX config list"}),"\n",(0,o.jsxs)(n.p,{children:["See Autogen docs for more inforation on the use of ",(0,o.jsx)(n.code,{children:"config_list"}),": ",(0,o.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/topics/llm_configuration#why-is-it-a-list",children:"LLM\nConfiguration"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\n\n# Set environment variables with your current workspace host and a personal access token\n# To a secret you have already set up: dbutils.secrets.get(\'your_scope_name\',\'databricks_host\')\n\n# DATABRICKS_HOST format: "https://{your workspace url}" (no trailing slash)\n## AWS Workspace example: "https://my-databricks-workspace.cloud.databricks.com"\n## Azure Workspace example: "https://adb-123456790123.12.azuredatabricks.net"\nos.environ["DATABRICKS_HOST"] = "<FILL IN WITH YOUR WORKSPACE URL IN SUPPORTED DBRX REGION>"\n\n# DATABRICKS_TOKEN format: "dapi..."\n## Temp token: dbutils.notebook.entry_point.getDbutils().notebook().getContext().apiToken().get()\nos.environ["DATABRICKS_TOKEN"] = "dapi...."\n\nllm_config = {\n    "config_list": [\n        {\n            "model": "databricks-dbrx-instruct",\n            "api_key": str(os.environ["DATABRICKS_TOKEN"]),\n            "base_url": str(os.getenv("DATABRICKS_HOST")) + "/serving-endpoints",\n        }\n    ],\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"hello-world-example",children:"Hello World Example"}),"\n",(0,o.jsxs)(n.p,{children:["Our first example will be with a simple ",(0,o.jsx)(n.code,{children:"UserProxyAgent"})," asking a\nquestion to an ",(0,o.jsx)(n.code,{children:"AssistantAgent"}),". This is based on the tutorial demo\n",(0,o.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/tutorial/introduction",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["After sending the question and seeing a response, you can type ",(0,o.jsx)(n.code,{children:"exit"})," to\nend the chat or continue to converse."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import autogen\n\n# Create Assistant and User\nassistant = autogen.AssistantAgent(name="assistant", llm_config=llm_config)\n\nuser_proxy = autogen.UserProxyAgent(name="user", code_execution_config=False)\n\n# Initiate chat from user_proxy side\nchat_result = user_proxy.initiate_chat(assistant, message="What is MLflow?")\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'user (to assistant):\n\nWhat is MLflow?\n\n--------------------------------------------------------------------------------\nassistant (to user):\n\nSure, I\'d be happy to explain MLflow to you. MLflow is an open-source platform for managing machine learning workflows. It was developed by Databricks and was open-sourced in 2018. MLflow provides a number of features to help data scientists and machine learning engineers manage the end-to-end machine learning lifecycle, including:\n\n1. **MLflow Tracking**: This is a logging API that allows you to record and query experiments, including code, data, config, and results.\n2. **MLflow Projects**: This is a format for packaging reusable and reproducible data science code, which can be run on different platforms.\n3. **MLflow Models**: This is a convention for packaging machine learning models in multiple formats, making it easy to deploy in different environments.\n4. **MLflow Model Registry**: This is a central repository to store, manage, and serve machine learning models.\n\nHere is a Python code example of how you might use MLflow Tracking to log a simple experiment:\n```python\n# filename: mlflow_example.py\n\nimport mlflow\nimport numpy as np\n\n# Log a parameter (e.g., number of trees in a random forest)\nmlflow.log_param("num_trees", 100)\n\n# Log a metric (e.g., accuracy of a model)\naccuracy = np.random.rand()\nmlflow.log_metric("accuracy", accuracy)\n\n# Log the model\nmlflow.sklearn.log_model(model, "model")\n\n# End the run\nmlflow.end_run()\n```\nTo run this code, you would need to have MLflow installed and running on your machine. You can install MLflow using pip:\n```\npip install mlflow\n```\nThen, you can run the code using the following command:\n```\npython mlflow_example.py\n```\nThis will create a new experiment in MLflow and log the parameters, metrics, and model. You can then view the experiment in the MLflow UI.\n\nI hope this helps! Let me know if you have any other questions.\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Provide feedback to assistant. Press enter to skip and use auto-reply, or type 'exit' to end the conversation:  exit\n"})}),"\n",(0,o.jsx)(n.h2,{id:"simple-coding-agent",children:"Simple Coding Agent"}),"\n",(0,o.jsxs)(n.p,{children:["In this example, we will implement a \u201ccoding agent\u201d that can execute\ncode. You will see how this code is run alongside your notebook in your\ncurrent workspace, taking advantage of the performance benefits of\nDatabricks clusters. This is based off the demo\n",(0,o.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/topics/non-openai-models/cloud-mistralai/",children:"here"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"First, set up a directory:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from pathlib import Path\n\nworkdir = Path("coding")\nprint(workdir)\nworkdir.mkdir(exist_ok=True)\n\nfrom autogen.coding import LocalCommandLineCodeExecutor\n\ncode_executor = LocalCommandLineCodeExecutor(work_dir=workdir)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"coding\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Next, setup our agents and initiate a coding problem. Notice how the\n",(0,o.jsx)(n.code,{children:"UserProxyAgent"})," will take advantage of our ",(0,o.jsx)(n.code,{children:"code_executor"}),"; after the\ncode is shown on screen, type Return/Enter in the chatbox to have it\nexecute locally on your cluster via the bot\u2019s auto-reply."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),": with generative AI coding assistants, you should ",(0,o.jsx)(n.strong,{children:"always"}),"\nmanually read and review the code before executing it yourself, as LLM\nresults are non-deterministic and may lead to unintended consequences."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from autogen import AssistantAgent, UserProxyAgent\n\n# Setting up the agents.\nuser_proxy_agent = UserProxyAgent(\n    name="User",\n    code_execution_config={"executor": code_executor},\n    is_termination_msg=lambda msg: "TERMINATE" in msg.get("content"),\n)\n\nassistant_agent = AssistantAgent(\n    name="DBRX Assistant",\n    llm_config=llm_config,\n)\n\nchat_result = user_proxy_agent.initiate_chat(\n    assistant_agent,\n    message="Count how many prime numbers from 1 to 10000.",\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"User (to DBRX Assistant):\n\nCount how many prime numbers from 1 to 10000.\n\n--------------------------------------------------------------------------------\nDBRX Assistant (to User):\n\nSure, I can help you with that. We can write a Python script to count the number of prime numbers from 1 to 10000. Here's the script:\n\n```python\n# filename: count_primes.py\n\ndef is_prime(n):\n    if n <= 1:\n        return False\n    if n <= 3:\n        return True\n    if n % 2 == 0 or n % 3 == 0:\n        return False\n    i = 5\n    while i * i <= n:\n        if n % i == 0 or n % (i + 2) == 0:\n            return False\n        i += 6\n    return True\n\ndef count_primes(end):\n    count = 0\n    for num in range(1, end + 1):\n        if is_prime(num):\n            count += 1\n    return count\n\nprint(count_primes(10000))\n```\n\nThis script first defines a helper function `is_prime(n)` to check if a number `n` is prime. Then, it defines the main function `count_primes(end)` to count the number of prime numbers up to `end`. Finally, it prints the number of prime numbers from 1 to 10000.\n\nTo run the script, save it to a file named `count_primes.py`, and then execute it using the command `python count_primes.py` in a terminal or command prompt. The script will print the number of prime numbers from 1 to 10000.\n\nLet me know if you encounter any issues or errors when running the script.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK (inferred language is python)...\nUser (to DBRX Assistant):\n\nexitcode: 0 (execution succeeded)\nCode output: 1229\n\n\n--------------------------------------------------------------------------------\nDBRX Assistant (to User):\n\nGreat! The execution succeeded and the output is 1229, which is the number of prime numbers from 1 to 10000. This means that there are 1229 prime numbers in the range of 1 to 10000.\n\nTo verify the result, we can manually check the prime numbers in the range of 1 to 10000. Here are the first few prime numbers:\n\n2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 169, 173, 179, 181, 191, 193, 197, 199,...\n\nWe can see that there are indeed 1229 prime numbers in the range of 1 to 10000.\n\nTherefore, the output of the script is correct and the task is solved.\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Provide feedback to DBRX Assistant. Press enter to skip and use auto-reply, or type 'exit' to end the conversation:  \n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Provide feedback to DBRX Assistant. Press enter to skip and use auto-reply, or type 'exit' to end the conversation:  exit\n"})}),"\n",(0,o.jsx)(n.p,{children:"We can see the python file that was created in our working directory:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"%sh ls coding\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"count_primes.py\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"%sh head coding/count_primes.py\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"# filename: count_primes.py\n\ndef is_prime(n):\n    if n <= 1:\n        return False\n    if n <= 3:\n        return True\n    if n % 2 == 0 or n % 3 == 0:\n        return False\n    i = 5\n"})}),"\n",(0,o.jsx)(n.h2,{id:"conversable-bots",children:"Conversable Bots"}),"\n",(0,o.jsxs)(n.p,{children:["We can also implement the ",(0,o.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/tutorial/conversation-patterns/#two-agent-chat-and-chat-result",children:"two-agent chat\npattern"}),"\nusing DBRX to \u201ctalk to itself\u201d in a teacher/student exchange:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from autogen import ConversableAgent\n\n# Setting up the agents.\nstudent_agent = ConversableAgent(\n    name="Student_Agent",\n    system_message="You are a student willing to learn.",\n    llm_config=llm_config,\n)\n\nteacher_agent = ConversableAgent(\n    name="Teacher_Agent",\n    system_message="You are a computer science teacher.",\n    llm_config=llm_config,\n)\n\n# Initiate chat\nchat_result = student_agent.initiate_chat(\n    teacher_agent,\n    message="How does deep learning relate to artificial intelligence?",\n    summary_method="last_msg",\n    max_turns=1,  # Set to higher number to control back and forth\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'Student_Agent (to Teacher_Agent):\n\nHow does deep learning relate to artificial intelligence?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nTeacher_Agent (to Student_Agent):\n\nHello there! I\'m glad you asked about the relationship between deep learning and artificial intelligence (AI).\n\nDeep learning is actually a subset of AI, which is a broader field dedicated to creating algorithms and systems that can perform tasks that would normally require human intelligence. Other subsets of AI include rule-based systems, machine learning, natural language processing, and computer vision, among others.\n\nDeep learning, on the other hand, is a specific approach to building AI systems that is inspired by the structure and function of the human brain. In deep learning, we use artificial neural networks, which are composed of interconnected nodes or "neurons," to learn patterns in data and make predictions or decisions without being explicitly programmed to do so.\n\nDeep learning has been particularly successful in recent years due to several factors, including the availability of large amounts of data, powerful computational resources, and advances in neural network architectures and training algorithms. As a result, deep learning has achieved state-of-the-art performance in a wide range of tasks, such as image and speech recognition, natural language processing, and game playing.\n\nSo, in summary, deep learning is a specific approach to building AI systems that has gained a lot of attention in recent years due to its impressive performance on a variety of tasks. However, it is just one of many approaches to building AI systems, and it is important to understand the broader context of AI in order to fully appreciate the potential and limitations of deep learning.\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,o.jsx)(n.h2,{id:"implement-logging-display",children:"Implement Logging Display"}),"\n",(0,o.jsx)(n.p,{children:"It can be useful to display chat logs to the notebook for debugging, and\nthen persist those logs to a Delta table. The following section\ndemonstrates how to extend the default AutoGen logging libraries."}),"\n",(0,o.jsxs)(n.p,{children:["First, we will implement a Python ",(0,o.jsx)(n.code,{children:"class"})," that extends the capabilities\nof ",(0,o.jsx)(n.code,{children:"autogen.runtime_logging"}),"\n",(0,o.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/notebooks/agentchat_logging",children:"docs"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'class Databricks_AutoGenLogger:\n    def __init__(self):\n        from pyspark.sql import SparkSession\n        import autogen\n\n        self.spark = SparkSession.builder.getOrCreate()\n        self.logger_config = {"dbname": "logs.db"}\n\n    def start(self):\n        import autogen.runtime_logging\n\n        self.logging_session_id = autogen.runtime_logging.start(config=self.logger_config)\n        print("Logging session ID: " + str(self.logging_session_id))\n\n    def stop(self):\n        import autogen.runtime_logging\n\n        autogen.runtime_logging.stop()\n\n    def _get_log(self, dbname="logs.db", table="chat_completions"):\n        import sqlite3\n\n        con = sqlite3.connect(dbname)\n        query = f"SELECT * from {table} WHERE session_id == \'{self.logging_session_id}\' ORDER BY end_time DESC"\n        cursor = con.execute(query)\n        rows = cursor.fetchall()\n        column_names = [description[0] for description in cursor.description]\n        data = [dict(zip(column_names, row)) for row in rows]\n        con.close()\n        return data\n\n    def display_session(self):\n        import pandas as pd\n\n        return pd.DataFrame(self._get_log())\n\n    def persist_results(self, target_delta_table: str, mode="append"):\n        import pandas as pd\n\n        # Convert to Spark DF\n        sdf = self.spark.createDataFrame(pd.DataFrame(self._get_log()))\n\n        try:\n            sdf.write.format("delta").mode(mode).saveAsTable(target_delta_table)\n            print(f"Logs sucessfully written to table {target_delta_table} in {mode} mode")\n        except Exception as e:\n            print(f"An error occurred: {e}")\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Let\u2019s use the class above on our simplest example. Note the addition of\nlogging ",(0,o.jsx)(n.code,{children:".start()"})," and ",(0,o.jsx)(n.code,{children:".stop()"}),", as well as try/except for error\nhandling."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'assistant = autogen.AssistantAgent(name="assistant", llm_config=llm_config)\nuser_proxy = autogen.UserProxyAgent(name="user", code_execution_config=False)\n\n# Before initiating chat, start logging:\nlogs = Databricks_AutoGenLogger()\nlogs.start()\ntry:\n    user_proxy.initiate_chat(assistant, message="What is MLflow?", max_turns=1)\nexcept Exception as e:\n    print(f"An error occurred: {e}")\nlogs.stop()\n# Display logs\ndisplay(logs.display_session())\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'Logging session ID: 6c389f5f-3619-4762-8118-bc98dd414f90\nuser (to assistant):\n\nWhat is MLflow?\n\n--------------------------------------------------------------------------------\nassistant (to user):\n\nSure, I\'d be happy to explain MLflow to you. MLflow is an open-source platform for managing machine learning workflows. It was developed by Databricks and was open-sourced in 2018. MLflow provides a number of features to help data scientists and machine learning engineers manage the end-to-end machine learning lifecycle, including:\n\n1. **MLflow Tracking**: This is a logging API that allows you to record and query experiments, including code, data, config, and results.\n2. **MLflow Projects**: This is a format for packaging reusable and reproducible data science code, which can be run on different platforms.\n3. **MLflow Models**: This is a convention for packaging machine learning models in multiple formats, making it easy to deploy in different environments.\n4. **MLflow Model Registry**: This is a central repository to store, manage, and serve machine learning models.\n\nHere is a Python code example of how you might use MLflow Tracking to log a simple experiment:\n```python\n# filename: mlflow_example.py\n\nimport mlflow\nimport numpy as np\n\n# Log a parameter (e.g., number of trees in a random forest)\nmlflow.log_param("num_trees", 100)\n\n# Log a metric (e.g., accuracy of a model)\naccuracy = np.random.rand()\nmlflow.log_metric("accuracy", accuracy)\n\n# Log the model\nmlflow.sklearn.log_model(model, "model")\n\n# End the run\nmlflow.end_run()\n```\nTo run this code, you would need to have MLflow installed and running on your machine. You can install MLflow using pip:\n```\npip install mlflow\n```\nThen, you can run the code using the following command:\n```\npython mlflow_example.py\n```\nThis will create a new experiment in MLflow and log the parameters, metrics, and model. You can then view the experiment in the MLflow UI.\n\nI hope this helps! Let me know if you have any other questions.\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:d[0]}}),"\n",(0,o.jsxs)(n.p,{children:["With this, we have a simple framework to review and persist logs from\nour chats! Notice that in the ",(0,o.jsx)(n.code,{children:"request"})," field above, we can also see the\nsystem prompt for the LLM - this can be useful for prompt engineering as\nwell as debugging."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that when you deploy this to Databricks Model Serving, model\nresponses are auto-logged using ",(0,o.jsx)(n.a,{href:"https://docs.databricks.com/en/lakehouse-monitoring/index.html",children:"Lakehouse\nMonitoring"}),";\nbut the above approach provides a simple mechanism to log chats from the\n",(0,o.jsx)(n.strong,{children:"client side"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Let\u2019s now persist these results to a Delta table in ",(0,o.jsx)(n.a,{href:"https://docs.databricks.com/en/data-governance/unity-catalog/index.html",children:"Unity\nCatalog"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from pyspark.sql import SparkSession\n\nspark = SparkSession.builder.getOrCreate()  # Not needed in Databricks; session pre-provisioned in notebooks\n\n# Use 3-layer namespace: catalog.schema.table. The table will be created if it does not exist.\ntarget_delta_table = "your_catalog.your_schema.autogen_logs"\nlogs.persist_results(target_delta_table=target_delta_table, mode="append")\n\n# Display current rows in table\ndisplay(spark.table(target_delta_table))\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Logs sucessfully written to table shared.tjc.autogent_logs in append mode\n"})}),"\n",(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:d[1]}}),"\n",(0,o.jsx)(n.h2,{id:"closing-thoughts",children:"Closing Thoughts"}),"\n",(0,o.jsx)(n.p,{children:"This notebook provides a few basic examples of using Autogen with DBRX,\nand we\u2019re excited to see how you can use this framework alongside\nleading open-source LLMs!"}),"\n",(0,o.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Databricks Foundation Model API supports other open-source LLMs\n(Mixtral, Llama2, etc.), but the above code has not been tested on\nthose."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"As of April 2024, DBRX does not yet support tool/function calling\nabilities. To discuss this capability further, please reach out to\nyour Databricks representative."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(67294);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);