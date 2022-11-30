import sqlite3

conn = sqlite3.connect('./database/dsapiens.db', isolation_level=None)
cursor = conn.cursor()


