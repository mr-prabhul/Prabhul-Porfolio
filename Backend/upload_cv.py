import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

# Create Vector Store
vector_store = client.vector_stores.create(
    name="Prabhul CV"
)

print("Vector Store ID:")
print(vector_store.id)

# Upload CV
with open("chatbot/cv.pdf", "rb") as file:

    uploaded_file = client.files.create(
        file=file,
        purpose="assistants"
    )

print("File ID:")
print(uploaded_file.id)

# Add CV to Vector Store
vector_store_file = client.vector_stores.files.create(
    vector_store_id=vector_store.id,
    file_id=uploaded_file.id
)

print("Vector Store File:")
print(vector_store_file.id)

print("\nCV uploaded successfully!")
print("\nAdd this to your .env:")
print(f"OPENAI_VECTOR_STORE_ID={vector_store.id}")