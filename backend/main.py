from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET","POST"],
    allow_headers=["*"],
)

@app.post("/login")
async def login(request: Request):
    data = await request.json()
    print("Datos recibidos:", data)
    return {"status": "ok", "username": data.get("username")}


@app.post("/register")
async def register(request: Request):
    data = 
