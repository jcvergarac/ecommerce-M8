import { db } from '../firebase/firebase'
import { collection, addDoc, getDocs, getDoc, doc, query, orderBy } from "firebase/firestore"

export const getNews = async () => {
    try {
        const q = query(
            collection(db, "noticias"),
            orderBy("date", "desc")
        )

        const snapshot = await getDocs(q)

        return snapshot.docs.map(docItem => ({
            id: docItem.id,
            ...docItem.data()
        }))

    } catch (error) {
        console.error("Error obteniendo noticias:", error)
        return []
    }
}


export const createNews = async (news) => {
    try {
        await addDoc(collection(db, "noticias"), news)
    } catch (error) {
        console.error("Error creando noticia:", error)
    }
}


export const getOneNews = async (id) => {
    try {
        const ref = doc(db, "noticias", id)

        const snapshot = await getDoc(ref)

        if (snapshot.exists()) {
            return {
                id: snapshot.id,
                ...snapshot.data()
            }
        } else {
            return null
        }

    } catch (error) {
        console.error("Error obteniendo noticia:", error)
        return null
    }
}